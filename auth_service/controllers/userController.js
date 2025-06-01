const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { userName, password, secretAnswer } = req.body;
    const user = new User({ userName, password, secretAnswer });
    await user.save();
    res.status(201).json({ message: 'Utilisateur cree' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Mot de passe incorrect' });

    res.status(200).json({ message: 'Connexion reussie' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.recoverPassword = async (req, res) => {
  try {
    const { userName, secretAnswer, newPassword } = req.body;
    const user = await User.findOne({ userName, secretAnswer });
    if (!user) return res.status(404).json({ error: 'Infos invalides' });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.status(200).json({ message: 'Mot de passe mis a jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
