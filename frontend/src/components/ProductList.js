import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import ProductCard from './ProductCard';
import { toast } from 'react-toastify';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/api/products');
        setProducts(response.data.products);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(response.data.products.map(p => p.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (error) {
        toast.error('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) return <div className="text-center">Loading products...</div>;

  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="category" style={{ marginRight: '10px' }}>Category:</label>
          <select 
            id="category"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-control"
            style={{ width: 'auto' }}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: 'auto' }}
          />
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center">No products found</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product._id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;