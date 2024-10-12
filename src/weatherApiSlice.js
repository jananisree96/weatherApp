import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = '1b269eaf9d780cd33379c42fe6635dfa'; // Replace with your OpenWeatherMap API key

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&appid=${apiKey}&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
