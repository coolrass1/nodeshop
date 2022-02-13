const Product = require('../Models/Product');

exports.getProducts = async (req, res) => {
  console.log(req.headers.authorization);

  try {
    const data = await Product.find();
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};

exports.getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findById(id);
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findByIdAndDelete(id);
    res.status(201).json({ data: `deleted ${data}` });
  } catch (error) {
    console.log(error);
  }
};
