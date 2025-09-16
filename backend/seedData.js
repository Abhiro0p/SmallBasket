const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: 'Organic Bananas',
    description: 'Fresh organic bananas, rich in potassium',
    price: 2.99,
    originalPrice: 3.49,
    category: 'Fruits',
    subCategory: 'Tropical Fruits',
    brand: 'Organic Farms',
    image: 'banana.jpg',
    stock: 50,
    unit: '1 lb',
    rating: 4.5,
    numReviews: 23,
    tags: ['organic', 'fresh', 'healthy'],
    isFeatured: true,
    isAvailable: true
  },
  {
    name: 'Red Apples',
    description: 'Sweet and crunchy red apples',
    price: 1.99,
    originalPrice: 2.49,
    category: 'Fruits',
    subCategory: 'Local Fruits',
    brand: 'Apple Valley',
    image: 'apple.jpg',
    stock: 100,
    unit: '1 lb',
    rating: 4.2,
    numReviews: 45,
    tags: ['fresh', 'sweet', 'crunchy'],
    isFeatured: true,
    isAvailable: true
  },
  {
    name: 'Carrots',
    description: 'Fresh organic carrots, perfect for salads',
    price: 1.49,
    originalPrice: 1.99,
    category: 'Vegetables',
    subCategory: 'Root Vegetables',
    brand: 'Farm Fresh',
    image: 'carrot.jpg',
    stock: 75,
    unit: '1 lb',
    rating: 4.3,
    numReviews: 34,
    tags: ['organic', 'fresh', 'vitamin-rich'],
    isFeatured: false,
    isAvailable: true
  },
  {
    name: 'Milk',
    description: 'Fresh whole milk, pasteurized',
    price: 3.49,
    originalPrice: 3.99,
    category: 'Dairy',
    subCategory: 'Milk',
    brand: 'Dairy Pure',
    image: 'milk.jpg',
    stock: 30,
    unit: '1 gallon',
    rating: 4.6,
    numReviews: 67,
    tags: ['fresh', 'calcium', 'pasteurized'],
    isFeatured: true,
    isAvailable: true
  },
  {
    name: 'Whole Wheat Bread',
    description: 'Healthy whole wheat bread',
    price: 2.99,
    originalPrice: 3.49,
    category: 'Bakery',
    subCategory: 'Bread',
    brand: 'Bakery Fresh',
    image: 'bread.jpg',
    stock: 40,
    unit: '1 loaf',
    rating: 4.1,
    numReviews: 28,
    tags: ['whole wheat', 'healthy', 'fresh'],
    isFeatured: false,
    isAvailable: true
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bigbasket');
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();