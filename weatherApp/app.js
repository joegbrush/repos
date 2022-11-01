const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p ');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const weather = {
  temperature: {
    value: 18,
    unit: 'celsius',
  },
  description: 'few clouds',
  iconId: '01d',
  city: 'London',
  country: 'GB',
};

function displayWeather() {
  iconElement.innerHTML = `<img src="icon/${weather.iconId}.png`;
  tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
