const APIKey = "b1197d77e383b6ec0f845e1d8f807ce4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&units=metric`;
  //fetch(url);//기다려야 함
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".js-weather span:first-child");
      const city = document.querySelector(".js-weather span:last-child");
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Cannot find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
