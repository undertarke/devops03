require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Kết nối database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: '🚀 API đang chạy. Thử GET /api/products' });
});

app.use('/api/products', productRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route không tồn tại' });
});

app.listen(8088);
