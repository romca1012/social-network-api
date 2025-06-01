const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const { port, mongoURI } = require('./config');

const app = express();
app.use(express.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecte a MongoDB'))
  .catch(err => console.error('Erreur MongoDB :', err));

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Auth service actif sur http://localhost:${port}`);
});
