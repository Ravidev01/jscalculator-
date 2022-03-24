let API_KEY = "cd01b210e6c587b1091d9e5ba48f3d29";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(Full_Url);

  return weatherPromise.then((response) => {
    return response.json();
  });
};

function searchCity() {
  const city = document.getElementById("city-input").value;

  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
      console.log(response);
    })

    .catch((err) => {
      console.log(err);
      document.write("invalid Data");
    });
}

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("Weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
