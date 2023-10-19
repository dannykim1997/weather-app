

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=879d18d5838246089ec22422231410&q=${city}`, {mode: 'cors'});

        if (!response.ok) {
            throw new Error(`Weather data not found for ${city}`);
        }

        const responseData = await response.json();

        const location = document.querySelector('.location');
        const temp = document.querySelector('.temp');
        const condition = document.querySelector('.condition');
        const humidity = document.querySelector('.humidity');
        const wind = document.querySelector('.wind');
        const conditionImage = document.querySelector('.condition-image');
        const iconUrl = `https:${responseData.current.condition.icon}`;
        
        location.textContent = `${responseData.location.name}, ${responseData.location.region}`;
        temp.textContent = `${responseData.current.temp_f} F°`;
        conditionImage.querySelector('img').src = `${iconUrl}`;
        condition.textContent = `${responseData.current.condition.text}`;
        humidity.textContent = `Humidity: ${responseData.current.humidity}`;
        wind.textContent = `Wind: ${responseData.current.wind_mph} MPH`;
    } 

    catch (error) {
        const location = document.querySelector('.location');
        const temp = document.querySelector('.temp');
        const condition = document.querySelector('.condition');
        const humidity = document.querySelector('.humidity');
        const wind = document.querySelector('.wind');
        const conditionImage = document.querySelector('.condition-image');

        location.textContent = `Error: ${error.message}`;
        temp.textContent = '';
        condition.textContent = '';
        humidity.textContent = '';
        wind.textContent = '';
        conditionImage.querySelector('img').src = 'https://static.vecteezy.com/system/resources/previews/013/743/806/original/sad-face-emoji-png.png';
    }
}

const cityForm = document.getElementById('city-form');

cityForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;
    getWeather(city);
});

getWeather('Los Angeles');