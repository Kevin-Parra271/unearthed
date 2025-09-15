// Import express
import express from 'express';

// Initialize the app
const app = express();

// Serve static files from client/public
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

// Define a root route to test the server
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
});

// Start the server on PORT from environment or default 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
