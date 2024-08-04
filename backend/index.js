const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./route/User');
const app = express();
const PORT = process.env.PORT || 3000;
const cors=require('cors');

// Middleware
app.use(express.json({ strict: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/DemoTrial', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB');
  } catch (error) {
    console.error('Error connecting to DB:', error);
    process.exit(1);
  }
};

mongoConnection();

// Mount routes
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled promise rejection:', err);
  process.exit(1);
});