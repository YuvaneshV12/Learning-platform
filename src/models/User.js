import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
  },
});

// Create indexes
userSchema.index({ email: 1 }, { unique: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  try {
    // Only hash the password if it's modified (or new)
    if (!this.isModified('password')) {
      return next();
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    console.log('Comparing passwords for user:', this.email);
    console.log('Candidate password length:', candidatePassword.length);
    console.log('Stored hashed password length:', this.password.length);
    
    // Use bcrypt.compare directly to compare the candidate password with the stored hash
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log('Password comparison result:', isMatch);
    
    if (!isMatch) {
      console.log('Password verification failed for user:', this.email);
      console.log('This could be due to:');
      console.log('1. The password was entered incorrectly');
      console.log('2. The password was not hashed correctly during registration');
      console.log('3. The stored hash is corrupted');
    }
    
    return isMatch;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw error;
  }
};

// Update last login
userSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
};

const User = mongoose.model('User', userSchema);

export default User; 