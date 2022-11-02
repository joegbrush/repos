if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// API endpoint
app.post('/weather', (req, res) => {});

app.listen(3000, () => {
  console.log('Server Startedzzzzz');
});
