const express = require('express');
const cors = require('cors');  // <-- import cors
const app = express();

app.use(cors());  // <-- enable CORS for all routes

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const port = 5000;
app.listen(port, () => console.log(`Backend running on port ${port}`));

