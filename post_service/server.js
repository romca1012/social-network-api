const express = require('express');
const mongoose = require('mongoose');
const { port, mongoURI } = require('./config');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

mongoose.connect(mongoURI)
  .then(() => console.log('Connecte à MongoDB - Post Service'))
  .catch(err => console.error('Erreur MongoDB :', err));

app.use('/api/posts', postRoutes);

app.listen(port, () => {
  console.log(`Post service actif sur http://localhost:${port}`);
});
