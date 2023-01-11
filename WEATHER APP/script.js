const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0e61bfc261mshc80b47ba5836bb0p11ac5cjsn8dafb13aa4ef',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
};
const getWeather= (city)=>{
cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
    .then(response => response.json())
    .then(response => {

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        //wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
