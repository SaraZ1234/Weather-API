const valueSearch = document.getElementById('valueSearch');
const city = document.getElementById('city');
const temperature = document.getElementById('temperature');

const description = document.querySelector('.description');
const pressure = document.getElementById('pressure');
const clouds = document.getElementById('clouds');
const humidity1 = document.getElementById('humidity');
const main = document.querySelector('main');


const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (valueSearch.value.trim() != '') {
        saerchWeather();
    }

})

let id = '9505fd1df737e20152fbd78cdb289b6a';
// let url = 'https://api.openweathermap.org/data/2.5/weather?q=CityName&units=metric&appid='+id;

const saerchWeather = () => {
    const query = valueSearch.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${id}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod === "404")
            {
                console.log("I should be vibrated");
                main.classList.add('vibrate');
                
            }
            console.log("City's data:", data.name);
            console.log("Weather prediction:", data.weather[0].main);
            console.log("Pressure:", data.main.pressure);
            console.log("Humidity:", data.main.humidity);
            console.log("clouds:", data.clouds.all);
            console.log("Icon:", data.weather[0].icon);
            console.log("Final image url is:", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
           
            

            city.innerHTML = `
              <figcaption>${data.name}</figcaption>

      `;
            temperature.innerHTML = `
              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <figcaption>
          <span>${data.main.temp}</span>
          <sup>o</sup>
        </figcaption>

      `;
            clouds.innerHTML = `${data.clouds.all}`;
            humidity1.innerHTML = `${data.main.humidity}`;
            pressure.innerHTML = `${data.main.pressure}`;

            description.innerHTML = `${data.weather[0].main}`;
        }).catch(() => {
            
        })
}
