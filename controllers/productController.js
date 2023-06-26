const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const { name, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, { name, price }, {
      new: true
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({
      message: "Update product success",
      data: updatedProduct
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Update product failed",
      data: error
    })
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Delete product success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
};
