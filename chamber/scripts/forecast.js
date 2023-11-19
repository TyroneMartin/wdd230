document.addEventListener("DOMContentLoaded", function () {
    const ONE_DAY = 24 * 60 * 60 * 1000;

    async function fetchForecast() {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=18.471119&lon=-77.987184&appid=1daaa26c0e994a2e7ac8523b60a91f1b&units=imperial`;
        try {
            const response = await fetch(weatherURL);
            if (response.ok) {
                const data = await response.json();
                showForecast(data.list);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    function showForecast(forecasts) {
        let dates = [];
        let mydate = new Date();

        for (let i = 0; i < 3; i++) {
            mydate = new Date(mydate.getTime() + ONE_DAY);
            let nextdate = mydate.toISOString().slice(0, 10);
            dates.push(nextdate);
        }

        const weatherSection = document.getElementById("weatherSection");

        for (let i = 0; i < 3; i++) {
            let newSection = document.createElement("section");
            let iconCode = forecasts[i * 8].weather[0].icon; // Assuming the icon code is the same for all three times in a day
            let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            
            newSection.innerHTML = `
                <h2>${dates[i]}</h2>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>High: ${forecasts[i * 8].main.temp_max.toFixed(0)}&deg;</p>
                <p>Low: ${forecasts[i * 8].main.temp_min.toFixed(0)}&deg;</p>
            `;
            weatherSection.appendChild(newSection);
        }
    }

    fetchForecast();
});
