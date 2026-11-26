const currentTemperature = document.querySelector('#current-temp');
const weatherFigure = document.querySelector('#current-weather-icon');
const captionDesc = document.querySelector('#current-weather-icon figcaption');
const foreCast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.77&lon=-2.51&units=metric&appid=152244ba5249fb05375dc185127adf47';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=6.77&lon=-2.51&appid=152244ba5249fb05375dc185127adf47';


async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        displayApiResults(data);
       } else {
        throw new Error(await response.text());
       }
    } catch (error) {
        console.error(error);
    }   
}

apiFetch();

async function forecastFetch (){
    try{
        const forecastResponse = await fetch(forecastURL);
        if(forecastResponse.ok){
            const forecastData = await forecastResponse.json();
            displayForecastResults(forecastData);
        } else{
            throw new Error(await forecastResponse.text())
        }
    }catch(error){
        console.error(error);
    }
 }

forecastFetch();

function displayApiResults(data) {
    currentTemperature.innerHTML = `${data.main.temp}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '90');
    weatherIcon.setAttribute('height', '70');

    weatherFigure.prepend(weatherIcon);
    captionDesc.textContent = desc;
}

const displayForecastResults = (days) => {
    const threeDays = days.list.filter((item) => item.dt_txt.includes("18:00:00")).slice(0, 3);

    foreCast.innerHTML = '';

    threeDays.forEach((day) => {
        const card = document.createElement('section');
        const date = document.createElement('h3');
        const temperatures = document.createElement('div');
        const min = document.createElement('p');
        const max = document.createElement('p');
        const icon = document.createElement('img');
    
        const readableDate = new Date(day.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });

        date.textContent = readableDate;

        min.innerHTML = `Low: ${Math.round(day.main.temp_min)}&deg;C`;
        max.innerHTML = `High: ${Math.round(day.main.temp_max)}&deg;C`;

        icon.setAttribute('src', `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`);
        icon.setAttribute('alt', day.weather[0].description);
        icon.setAttribute('loading', 'lazy');

        card.classList.add('forecast-card');
        temperatures.classList.add('temperatures');

        temperatures.appendChild(min);
        temperatures.appendChild(max);

        card.appendChild(date);
        card.appendChild(temperatures);
        card.appendChild(icon);

        foreCast.appendChild(card);
    });
 };
