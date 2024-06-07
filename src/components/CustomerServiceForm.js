import React, { useState } from 'react';
import axios from 'axios';

const CustomerServiceForm = () => {
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/requests/add', { category, comments }, { withCredentials: true });
      setCategory('');
      setComments('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="General Queries">General Queries</option>
          <option value="Product Features Queries">Product Features Queries</option>
          <option value="Product Pricing Queries">Product Pricing Queries</option>
          <option value="Product Feature Implementation Requests">Product Feature Implementation Requests</option>
        </select>
      </label>
      <label>
        Comments:
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerServiceForm;
