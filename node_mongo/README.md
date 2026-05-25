# Express + MongoDB API

Backend đơn giản với 2 API GET và POST kết nối MongoDB.

## 📁 Cấu trúc thư mục

```
express-mongo-api/
├── config/
│   └── db.js              # Kết nối MongoDB
├── models/
│   └── Product.js         # Schema Product
├── routes/
│   └── productRoutes.js   # Định nghĩa API GET, POST
├── .env                   # Biến môi trường
├── seed.js                # Script thêm 10 dữ liệu mẫu
├── server.js              # Entry point
└── package.json
```

## 🚀 Cách chạy

### 1. Cài đặt MongoDB
- **Local**: cài MongoDB Community Server, hoặc
- **Cloud**: tạo cluster miễn phí tại [MongoDB Atlas](https://www.mongodb.com/atlas) và thay `MONGO_URI` trong file `.env`

### 2. Cài dependencies
```bash
npm install
```

### 3. Seed 10 dữ liệu mẫu vào database
```bash
npm run seed
```

### 4. Chạy server
```bash
npm start
```
Server sẽ chạy tại `http://localhost:3000`

## 📡 API Endpoints

### GET — Lấy danh sách sản phẩm
```bash
curl http://localhost:3000/api/products
```

Response:
```json
{
  "success": true,
  "count": 10,
  "data": [ ... ]
}
```

### POST — Tạo sản phẩm mới
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Macbook Pro 14",
    "price": 45990000,
    "category": "Laptop",
    "stock": 12
  }'
```

Response:
```json
{
  "success": true,
  "message": "Tạo sản phẩm thành công",
  "data": { ... }
}
```

## 🛠 Tech stack
- Node.js + Express
- MongoDB + Mongoose
- dotenv, cors
