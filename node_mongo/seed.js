require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const sampleProducts = [
  { name: 'iPhone 15 Pro',       price: 28990000, category: 'Điện thoại',  stock: 25 },
  { name: 'Samsung Galaxy S24',  price: 22990000, category: 'Điện thoại',  stock: 30 },
  { name: 'MacBook Air M3',      price: 32990000, category: 'Laptop',      stock: 15 },
  { name: 'Dell XPS 13',         price: 27500000, category: 'Laptop',      stock: 10 },
  { name: 'iPad Air',            price: 16990000, category: 'Tablet',      stock: 20 },
  { name: 'AirPods Pro 2',       price: 5990000,  category: 'Phụ kiện',   stock: 50 },
  { name: 'Sony WH-1000XM5',     price: 8490000,  category: 'Phụ kiện',   stock: 18 },
  { name: 'Apple Watch Series 9',price: 10990000, category: 'Đồng hồ',     stock: 22 },
  { name: 'Bàn phím Logitech MX',price: 2490000,  category: 'Phụ kiện',   stock: 40 },
  { name: 'Chuột Logitech MX 3', price: 2290000,  category: 'Phụ kiện',   stock: 45 },
];

const seedDB = async () => {
  try {
    await connectDB();

    // Xoá dữ liệu cũ
    await Product.deleteMany();
    console.log('🗑️  Đã xoá dữ liệu cũ');

    // Thêm dữ liệu mẫu
    const inserted = await Product.insertMany(sampleProducts);
    console.log(`✅ Đã thêm ${inserted.length} sản phẩm vào database`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed lỗi:', error.message);
    process.exit(1);
  }
};

seedDB();
