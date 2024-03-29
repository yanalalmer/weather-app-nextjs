import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';

const API = axios.create({
  baseURL,
});

export const fetchWeather = (cityName) => {
  const requestUrl = `${baseURL}?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  return API.get(requestUrl).then(({ data }) => data);
};
