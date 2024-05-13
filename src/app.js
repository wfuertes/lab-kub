const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the path to the views directory
const viewsPath = path.join(__dirname, 'views');

// Sample todos data
const todos = [
  { id: 1, text: 'Learn Node.js' },
  { id: 2, text: 'Build a todo app' },
  { id: 3, text: 'Deploy the app' }
];

// Route to render the index page with todos
app.get('/', (req, res) => {
  res.render(path.join(viewsPath, 'index'), { todos: todos });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
