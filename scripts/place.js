const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const temperature = 10; 
const windSpeed = 5; 

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

let windChillValue = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temperature, windSpeed) + "°C";
}

document.getElementById("windChill").textContent = windChillValue;
