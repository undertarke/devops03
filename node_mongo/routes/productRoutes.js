const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products  -> lấy tất cả sản phẩm
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/products  -> tạo sản phẩm mới
router.post('/', async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    if (!name || price == null) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng cung cấp name và price',
      });
    }

    const product = await Product.create({ name, price, category, stock });

    res.status(201).json({
      success: true,
      message: 'Tạo sản phẩm thành công',
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
