
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.get('/api/students', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM students');
  res.json(rows);
});

app.listen(3000, () => console.log('Backend running on port 3000'));
