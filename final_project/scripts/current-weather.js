const LAT = "33.1214924";
const LON = "-117.3702032";
const APIKEY = "1daaa26c0e994a2e7ac8523b60a91f1b";  // This is a free key, will be made public 
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayWeather(weatherData) {
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;
  const temperature = weatherData.main.temp.toFixed(0);
  const humidity = weatherData.main.humidity;

  let weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  let weatherDesc = document.getElementById("weather-desc");
  weatherDesc.innerHTML = desc;

  let weatherTemp = document.getElementById("weather-temp");
  weatherTemp.innerHTML = `${temperature}&deg;F`;

  let weatherHum = document.getElementById("weather-hum");
  weatherHum.innerHTML = `Humidity: ${humidity}%`;
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();