if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res) => {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${req.body.latitude}&lon=${req.body.longitude}&exclude=dialy&appid=${OPENWEATHERMAP_API_KEY}?units=auto`;
  axios({
    url: url,
    responseType: 'json',
  }).then((data) => res.json(data.data.current));
});

app.listen(3000, () => {
  console.log('Server Started');
});
