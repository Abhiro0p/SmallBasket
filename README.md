# SmallBasket - Complete MERN Stack E-commerce Application

A full-featured, responsive online grocery store built with the MERN stack (MongoDB, Express.js, React, Node.js) that replicates the core functionality of BigBasket.


## 🌟 Features

### 🎯 Core Functionality
- **User Authentication** - Secure register, login, and user profile management
- **Product Catalog** - Browse products with categories, advanced search, and filters
- **Shopping Cart** - Add, remove, and update items with persistent storage
- **Order Management** - Complete order placement, tracking, and history
- **Wishlist** - Save favorite products for later
- **Responsive Design** - Mobile-first design that works on all devices

### 🚀 Advanced Features
- Advanced product search and filtering by category, price, and rating
- Multiple address management with default addresses
- Order status tracking (Pending, Processing, Shipped, Delivered, Cancelled)
- Admin panel for product management (add, edit, delete products)
- Image upload for products with Multer
- JWT authentication with secure password hashing
- Pagination and infinite scrolling
- Product reviews and ratings system

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework with hooks
- **React Router v6** - Navigation and routing
- **React Context API** - State management
- **Axios** - HTTP client for API calls
- **React Toastify** - Beautiful notifications and alerts
- **CSS3 & Flexbox/Grid** - Modern styling with responsive design
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework with middleware support
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password encryption and hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager
- Git

### Clone and Setup Project
```bash
# Clone the repository
git clone https://github.com/Abhiro0p/SmallBasket.git
cd bigbasket-complete

# Setup backend
cd backend
npm install

# Setup frontend
cd ../frontend
npm install

# Run backend
cd backend
npm run dev

# Run frontend
cd frontend
npm  start
```
### Backend .env Example
```bash
# Port to run backend server
PORT=5000

# MongoDB connection string (local or Atlas)
MONGODB_URI=mongodb://localhost:27017/bigbasket

# JWT secret key for authentication (change in production)
JWT_SECRET=your_super_secret_jwt_key_here

# Node environment
NODE_ENV=development
```
### Frontend .env Example
```bash
# Base URL where backend API is served
REACT_APP_API_BASE_URL=http://localhost:5000

```