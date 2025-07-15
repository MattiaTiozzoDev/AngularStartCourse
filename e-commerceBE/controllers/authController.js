// Utenti simulati (normalmente verrebbero da un DB)
const users = [
  { username: 'user', password: 'password' }
];

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Controllo utente
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenziali non valide' });
  }

  // Successo
  res.status(200).json({ message: 'Login effettuato con successo!' });
};