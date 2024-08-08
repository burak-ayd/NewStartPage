import { useSelector } from "react-redux";

export const useCity = () => useSelector((state) => state.weather.city);
export const useUnits = () => useSelector((state) => state.weather.units);
export const useLang = () => useSelector((state) => state.weather.lang);
export const useWeather = () => useSelector((state) => state.weather.weather);
export const useForecast = () => useSelector((state) => state.weather.forecast);
