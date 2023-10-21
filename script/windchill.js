function  showWindChill (tem, speed) {

    const showWindChillSpan = document.getElementById (windchill);
    let message = "N/A"
    if (tem <= 50 && speed > 3) {
        let chillfactor = math.pow(speed, 0.16)
    }
}   

const temperatureSpan = document.getElementById("tempreature");
const chill = 35.74 + (0.215 * temp) - (35.75 * chilfactor) + (0.424275 * temp * chill)