const currentTemperature = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const foreCast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.77&lon=-2.51&units=imperial&appid=152244ba5249fb05375dc185127adf47';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=6.77&lon=-2.51&appid=152244ba5249fb05375dc185127adf47';


async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        displayResults(data);
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
            displayForecast(forecastData);
        } else{
            throw new Error(await forecastResponse.text())
        }
    }catch(error){
        console.error(error);
    }
 }

forecastFetch();

function displayResults(data) {
    currentTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

const displayForecast = (days) => {
    const threeDays = days.list.filter((item) => item.dt_txt.includes("18:00:00")).slice(0, 3);
    threeDays.forEach((day) => {
        let card = document.createElement('section');
        let min = document.createElement('p');
        let max = document.createElement('p');
        let date = document.createElement('p');
        let icon = document.createElement('img');
    
        const readableDate = new Date(day.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });


        min.innerHTML = `Low: ${day.main.temp_min}`;
        max.innerHTML = `High: ${day.main.temp_max}`;
        date.innerHTML = readableDate;

        icon.setAttribute('src', `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`);
        icon.setAttribute('alt', day.weather[0].description);

        card.appendChild(min);
        card.appendChild(max);
        card.appendChild(date);
        card.appendChild(icon);

        foreCast.appendChild(card);
    });
 }
