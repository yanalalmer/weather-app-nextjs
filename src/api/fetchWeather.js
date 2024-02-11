import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

const API = axios.create({
  baseURL,
});

export const fetchWeather = (cityName = 'amsterdam') => {
  const requestUrl = `${baseURL}?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  console.log('Request URL:', requestUrl);

  return API.get(requestUrl).then((response) => console.log(response));
};
