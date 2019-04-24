const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get('/api/thanos', (req, res) => {
  const status = Math.floor(Math.random() * 100) < 50 ? 'You were slain by Thanos, for the good of the Universe.' : 'You were spared by Thanos.';
  res.json(status);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));