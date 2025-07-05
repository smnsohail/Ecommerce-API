# 🛒 Simple E-commerce API

A basic e-commerce backend and frontend project built using Node.js, Express, MongoDB, and vanilla JavaScript.

🔗 GitHub Repository: https://github.com/smnsohail/Ecommerce-API

---

## 📦 Features

### 🔐 User Roles & Authentication
- Register & Login with JWT (stored in HttpOnly cookies)
- Role-based access:
  - Admin: Manage products (add, update, delete)
  - Customer: Browse products, add to cart, place orders

### 🛍️ E-commerce Modules
- Product Management (CRUD by admin)
- Cart Management (add, update, remove items)
- Order Placement from cart

### ✨ Additional Features
- Product Search by name or category
- Pagination for product listing
- Basic static frontend using HTML, CSS, and JS

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT (HttpOnly cookie-based)
- Frontend: HTML, CSS, JavaScript (static)
- Tools: Postman, dotenv, nodemon

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/smnsohail/Ecommerce-API.git  
cd Ecommerce-API

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables

Create a `.env` file in the root folder and add:

PORT=5000  
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce  
JWT_SECRET=your_jwt_secret_here

Replace `your_jwt_secret_here` with any secure string.

### 4. Start the Backend Server

npm run dev

Server will run at: http://localhost:5000

### 5. Access the Frontend

Visit in browser: http://localhost:5000/index.html

---

## 🔧 API Endpoints

### 👤 Authentication

- POST /api/auth/register – Register new user  
- POST /api/auth/login – Login and set JWT in cookie  
- GET /api/auth/logout – Logout (clears cookie)

### 🛍️ Products

- GET /api/products – Fetch all products (with search & pagination)  
- POST /api/products – Add product (admin only)  
- PUT /api/products/:id – Update product (admin only)  
- DELETE /api/products/:id – Delete product (admin only)

### 🛒 Cart

- GET /api/cart – View cart  
- POST /api/cart – Add to cart  
- PUT /api/cart – Update cart item  
- DELETE /api/cart/:productId – Remove item from cart

### 📦 Orders

- POST /api/orders – Place order from cart

---

## 📂 Project Structure

Ecommerce-API/
├── config/             # MongoDB connection  
├── controllers/        # Route handlers  
├── frontend/           # index.html, script.js, styles.css  
├── middleware/         # Auth middleware  
├── models/             # Mongoose models  
├── routes/             # API routes  
├── services/           # Business logic  
├── app.js              # Entry point  
├── package.json  
└── .env

---

## 📬 Postman Collection

Includes:
- User auth (register/login/logout)
- Product CRUD
- Cart management
- Place order

Download from GitHub (if uploaded):  
https://github.com/smnsohail/Ecommerce-API/blob/main/postman_collection.json

---

## 🔓 Sample Users

### Admin

{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "123456",
  "isAdmin": true
}

### Customer

{
  "name": "Sohil",
  "email": "sohil@example.com",
  "password": "123456",
  "isAdmin": false
}

Register using Postman. Login via frontend form.

---

## 🧪 Frontend Usage

- Visit: http://localhost:5000/index.html
- Login using form at the top
- Search or browse products
- Add products to cart
- View cart (auto-rendered)
- Checkout (place order)

Note: You must be logged in before using cart or order features.

---

## 📌 Notes

- MongoDB must be running on your system
- Ensure cookies are sent with fetch requests using: credentials: "include"
- Code follows clean separation: controllers handle req/res, services handle logic

---

## 🙌 Author

Mahammadsohil M Nadaf  
GitHub: https://github.com/smnsohail

---

## ✅ Assignment Requirements Covered

- [x] Product Listings  
- [x] Cart Management  
- [x] Order Creation  
- [x] User Authentication & Roles (JWT)  
- [x] Admin Product Management  
- [x] Optional Search & Pagination  
- [x] Basic Frontend with forms and interaction

