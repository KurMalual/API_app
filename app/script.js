const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const apiKey = '1a408bd53a964060cfc773152b5f059f';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const cityName = data.name;

        weatherInfo.innerHTML = `
            <p>Weather in ${cityName}: ${weatherDescription}</p>
            <p>Temperature: ${temperature}°C</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});
