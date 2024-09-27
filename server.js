const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sampleProducts = require('./data/products'); 
const Product = require('./models/Product'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const insertSampleProducts = async () => {
  try {
    const existingProductsCount = await Product.countDocuments();
    console.log(`Existing products in DB: ${existingProductsCount}`);

    if (existingProductsCount === 0) {
      console.log('Inserting sample products:', sampleProducts);
      const insertedProducts = await Product.insertMany(sampleProducts);
      console.log('Sample products inserted:', insertedProducts);
    } else {
      console.log('Products already exist in the database');
    }
  } catch (err) {
    console.error('Error inserting sample products:', err);
  }
};

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err); 
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await insertSampleProducts(); 
});
