import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios';

export const useWeatherStore = defineStore("weathers", () => {
  const weathers = ref('날씨 없음');
  function getWeather (){
    axios.get("http://localhost:8088/weather")
      .then(response => {
        console.log(response);
        return response.data;
      }).
      then(weather => {
        console.log(weather);
        weathers.value= weather.time;
        console.log(weathers.value);
      })
      .catch(err => console.error(err));
	}
  return { weathers,getWeather };
});