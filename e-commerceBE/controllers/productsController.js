const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'product.json');

let products = [];
let nextId = 1;

async function loadProducts() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    products = JSON.parse(data);
    nextId = products.length > 0 ? Math.max(...products.map(t => t.id)) + 1 : 1;
  } catch (error) {
    console.error('Errore nel caricamento dei prodotti:', error);
    products = [];
    nextId = 1;
  }
}

async function saveProducts() {
    try {
      await fs.writeFile(filePath, JSON.stringify(products, null, 2));
    } catch (error) {
      console.error('Errore nel salvataggio dei prodotti:', error);
    }
  }

async function getProducts(req, res) {
  res.json(products);
}

async function createProduct(req, res) {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newProduct = { id: nextId++, title };
  products.push(newProduct);
  await saveProducts();
  res.status(201).json(newProduct);
}

async function deleteProduct(req, res) {
  const id = parseInt(req.params.id);
  products = products.filter(product => product.id !== id);
  await saveProducts();
  res.status(204).send();
}

module.exports = {
  loadProducts,
  getProducts,
  createProduct,
  deleteProduct,
};