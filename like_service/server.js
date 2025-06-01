const express = require('express');
const mongoose = require('mongoose');
const { port, mongoURI } = require('./config');
const likeRoutes = require('./routes/likeRoutes');

const app = express();
app.use(express.json());

mongoose.connect(mongoURI)
  .then(() => console.log('Connecte à MongoDB - Like Service'))
  .catch(err => console.error('Erreur MongoDB :', err));

app.use('/api/likes', likeRoutes);

app.listen(port, () => {
  console.log(`Like service actif sur http://localhost:${port}`);
});
