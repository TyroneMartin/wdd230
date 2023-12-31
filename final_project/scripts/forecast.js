const LAT = 33.1216362;
const LON = -117.3702039;
const APIKEY = "1daaa26c0e994a2e7ac8523b60a91f1b";  // This is a free APIKEY, will be made public 

const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayWeather(data) {
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  const humidity = data.main.humidity.toFixed(0);
  const temperature = data.main.temp.toFixed(0);
  //   console.log(data);
  document.getElementById("weather-temp").textContent =
    temperature + "° F";
  document.getElementById("weather-desc").textContent = desc;
  document.getElementById("weather-icon").src = iconsrc;
  document.getElementById("weather-hum").textContent =
    "humidity: " + humidity + "%";
}

const ONE_DAY = 24 * 60 * 60 * 1000;

function displayForecast(forecasts) {
  // Get dates for next three days
  console.log(forecasts);
  let dates = [];
  let mydate = new Date();
  for (let i = 0; i < 3; i++) {
    mydate = new Date(mydate.getTime() + ONE_DAY);

    nextdate = mydate.toISOString().slice(0, 10);
    dates.push(nextdate);
  }
  console.log(dates);

//   const targetTime = "09:00:00";
// Find the object with the lowest temperature for each day
  forecastIcon = dates.map((date) =>
    forecasts
      .filter((x) => x.dt_txt.startsWith(date)&& x.dt_txt.endsWith("09:00:00"))
      .reduce((currentObj) =>
        currentObj.weather.icon
      )
  );

  forecastDescription = dates.map((date) =>
  forecasts
    .filter((x) => x.dt_txt.startsWith(date)&& x.dt_txt.endsWith("09:00:00"))
    .reduce((currentObj) =>
      currentObj.weather.description
    )
);
  // Add the forecast information to the HTML document
  weatherElt = document.querySelector(".forecast");
  for (let i = 0; i < 3; i++) {
    let newsection = document.createElement("div");
    newsection.innerHTML = `<h3>${dates[i]}</h3> 
    <p>${forecastDescription[i].weather[0].description}</p>
    <img id="forecast-icon" src="https://openweathermap.org/img/wn/${forecastIcon[i].weather[0].icon}.png" alt="icon image depicting forecast" >`;
    weatherElt.append(newsection);
    // console.log(forecastIcon[i].weather[0].icon);
  }
}
async function getTheForecast() {
  try {
    const response = await fetch(apiForecastURL);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getTheWeather() {
  try {
    const response = await fetch(apiWeatherURL);
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
getTheForecast();
