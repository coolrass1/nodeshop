const express = require('express');
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyAdmin,
} = require('../middleware/auth');

const {
  getProducts,
  createProduct,
  updateProduct,
  getOneProduct,
  deleteProduct,
} = require('../controller/Product');
router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getOneProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
