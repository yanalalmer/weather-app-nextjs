import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

const API = axios.create({
  baseURL,
});

export const fetchWeather = (cityName = 'amsterdam') => {
  const requestUrl = `${baseURL}?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  return API.get(requestUrl).then(({ data }) => console.log(data));
};
