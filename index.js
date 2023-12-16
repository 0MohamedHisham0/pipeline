const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express! ss');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
