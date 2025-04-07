import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/learning-platform')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Find all users
async function checkUsers() {
  try {
    const users = await User.find().select('-password');
    console.log('Users in database:', users);
    
    if (users.length === 0) {
      console.log('No users found in the database');
    } else {
      console.log(`Found ${users.length} users in the database`);
    }
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error checking users:', error);
    process.exit(1);
  }
}

// Run the function
checkUsers(); 