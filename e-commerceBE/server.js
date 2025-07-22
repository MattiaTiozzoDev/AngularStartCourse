const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const productsRoutes = require('./routes/productsRoutes');
const productsController = require('./controllers/productsController');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Carica i product all'avvio
productsController.loadProducts().then(() => {
  console.log('Product caricati correttamente');
}).catch(err => {
  console.error('Errore nel caricamento iniziale:', err);
});

//Abilita il cors per tutte le origini
app.use(cors());

// Routing
app.use('/products', productsRoutes);
app.use('/login', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});