const express = require('express');
const { formatDate, generateId } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    id: generateId(),
    timestamp: formatDate(new Date()),
    message: 'Welcome to devflow-testbed'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
