const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  // Send the HTML file as response
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
