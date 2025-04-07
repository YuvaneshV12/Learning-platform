import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    console.log('Registration request received:', { ...req.body, password: '[REDACTED]' });
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      console.log('Missing required fields:', { name: !!name, email: !!email, password: !!password });
      return res.status(400).json({ 
        message: 'All fields are required',
        missing: {
          name: !name,
          email: !email,
          password: !password
        }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Check if user exists
    console.log('Checking if user exists:', email);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    console.log('Creating new user:', { name, email });
    const user = new User({
      name,
      email,
      password, // The password will be hashed by the pre-save hook
    });

    // Save user to database
    console.log('Saving user to database...');
    try {
      await user.save();
      console.log('User saved successfully');
      console.log('Hashed password:', user.password);
    } catch (saveError) {
      console.error('Error saving user:', saveError);
      if (saveError.code === 11000) {
        return res.status(400).json({ message: 'Email already registered' });
      }
      throw saveError;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '24h' }
    );

    // Return success response with token
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ 
      message: 'Error registering user',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    console.log('Login request received:', { email: req.body.email, password: '[REDACTED]' });
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      console.log('Missing credentials:', { email: !!email, password: !!password });
      return res.status(400).json({ 
        message: 'Email and password are required',
        missing: {
          email: !email,
          password: !password
        }
      });
    }

    // Find user
    console.log('Finding user:', email);
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log('User found:', { id: user._id, name: user.name, email: user.email });

    // Check password
    console.log('Verifying password...');
    try {
      // Log the hashed password for debugging (remove in production)
      console.log('Stored hashed password length:', user.password ? user.password.length : 0);
      
      const isMatch = await user.comparePassword(password);
      console.log('Password match result:', isMatch);
      
      if (!isMatch) {
        console.log('Invalid password for user:', email);
        return res.status(401).json({ 
          message: 'Invalid email or password',
          details: 'The password you entered is incorrect'
        });
      }
    } catch (compareError) {
      console.error('Error comparing passwords:', compareError);
      return res.status(500).json({ 
        message: 'Error verifying password',
        details: compareError.message
      });
    }

    // Update last login
    console.log('Updating last login for user:', email);
    user.updateLastLogin();
    await user.save();

    // Generate JWT token
    console.log('Generating JWT token...');
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '24h' }
    );

    console.log('Login successful for user:', email);
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Error during login',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get current user
router.get('/user', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Development only: List all users (remove in production)
if (process.env.NODE_ENV === 'development') {
  router.get('/users', async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.status(200).json(users);
    } catch (error) {
      console.error('List users error:', error);
      res.status(500).json({ message: 'Error listing users' });
    }
  });
}

export default router; 