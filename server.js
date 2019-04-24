const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// sample GET route
app.get('/api/thanos/decimate', (req, res) => {
  const status = Math.floor(Math.random() * 100) < 50 ? 'You were slain by Thanos, for the good of the Universe.' : 'You were spared by Thanos.';
  res.json(status);
});

// sample POST route
app.post('/api/thanos/reconsider', function (req, res) {
  return setTimeout(() => {
    res.json(req.body.reconsider ? 'Perhaps...' : 'Maybe...');
  }, 1000);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));