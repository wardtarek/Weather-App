var inputFind = document.getElementById("inputFind");
var buttonFind = document.getElementById("button-find");
var inputSub = document.getElementById("inputSub");
var buttonSub = document.getElementById("button-sub");
let today;
let secondDay;
let thirdDay;
let City;
getData();
inputFind.addEventListener("keyup", function () {
  getData(inputFind.value);
});
async function getData(city = "cairo") {
  let req = await fetch(
    `https://api.weatherapi.com/v1//forecast.json?key=ba1622f407c94deaa23203432241306&q=${city}&days=3`
  );
  let data = await req.json();
  today = data.current;
  secondDay = data.forecast.forecastday[1].day;
  thirdDay = data.forecast.forecastday[2].day;
  City = data.location.name;
  console.log(today);
  displayDataDay1();
  displayDataDay2();
  displayDataDay3();
}
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
let day = days[date.getDay()];
let dayDate = date.getDate();
let month = months[date.getMonth()];
let nextDay;
let dayAfterTomorrow;
if (date.getDay() == 5) {
  nextDay = days[date.getDay() + 1];
  dayAfterTomorrow = days[0];
} else if (date.getDay() == 6) {
  nextDay = days[0];
  dayAfterTomorrow = days[1];
} else {
  nextDay = days[date.getDay() + 1];
  dayAfterTomorrow = days[date.getDay() + 2];
}

function displayDataDay1() {
  document.querySelector(".card1").innerHTML = `<div
                class="card-header d-flex justify-content-between align-items-center"
                style="background-color: #2d303d"
              >
                <p class="m-0">${day}</p>
                <p class="m-0">${dayDate} ${month}</p>
              </div>
              <div class="card-body" style="background-color: #323544">
                <p class="fs-4 mt-4">${City}</p>
                <p style="font-size: 80px; color: #fff; font-weight: bold">
                  ${today.temp_c}°C
                </p>
                <img src="${today.condition.icon}" alt="" class="w-25">
                <p style="color: var(--second-color)">${today.condition.text}</p>
                <div class="d-flex justify-content-around">
                  <p><i class="fa-solid fa-umbrella"></i> ${today.cloud}%</p>
                  <p><i class="fa-solid fa-wind"></i> ${today.wind_kph}km/h</p>
                  <p><i class="fa-regular fa-compass"></i> ${today.wind_dir}</p>
                </div>
              </div>`;
}
function displayDataDay2() {
  document.querySelector(
    ".card2"
  ).innerHTML = `<div class="card-header" style="background-color: #222530">
                <p class="m-0">${nextDay}</p>
              </div>
              <div class="card-body pt-5" style="background-color: #262936">
                <img src="${secondDay.condition.icon}" alt="">
                <p
                  style="font-size: 40px; color: #fff; font-weight: bold"
                  class="pt-3 m-0"
                >
                  ${secondDay.maxtemp_c}°C
                </p>
                <p>${secondDay.mintemp_c}°C</p>
                <p style="color: var(--second-color)">${secondDay.condition.text}</p>
              </div>`;
}
function displayDataDay3() {
  document.querySelector(
    ".card3"
  ).innerHTML = `              <div class="card-header" style="background-color: #2d303d">
                <p class="m-0">${dayAfterTomorrow}</p>
              </div>
              <div class="card-body pt-5" style="background-color: #323544">
                <img src="${thirdDay.condition.icon}" alt="">
                <p
                  style="font-size: 40px; color: #fff; font-weight: bold"
                  class="pt-3 m-0"
                >
                  ${thirdDay.maxtemp_c}°C
                </p>
                <p>${thirdDay.mintemp_c}°C</p>
                <p style="color: var(--second-color)">${thirdDay.condition.text}</p>
              </div>`;
}
