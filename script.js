const submitButton = document.querySelector(".btn");
const inputValue = document.querySelector(".form-control");
const todayDate = document.querySelector("#date");
const city = document.querySelector("#city");
const currentTemp = document.querySelector("#temp");
const conditions = document.querySelector("#conditions");
const hilo = document.querySelector("#hilo");
const apiKey = "e9199c1f35e27c5f90c0be966b0e68d0";


//GET CURRENT DATE
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let todaysDate = month+ "-" +day+ "-" +year;
//console.log(todaysDate);


//WHEN BUTTON IS CLICKED
submitButton.addEventListener("click", function() {
    currentTemp.innerHTML = "";
    city.innerHTML = "";
    conditions.innerHTML = "";
    hilo.innerHTML = "";
    todayDate.innerHTML = "";

    fetch('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&units=imperial&appid=e9199c1f35e27c5f90c0be966b0e68d0')
    .then(response => response.json())
    .then(data => {
        const addTemp = document.createElement("p");
        addTemp.textContent = data.main.temp;
        currentTemp.appendChild(addTemp);
 
        const addCity = document.createElement("p");
        addCity.textContent = data.name;
        city.appendChild(addCity);
 
        const addConditions = document.createElement("p");
        addConditions.textContent = data.weather[0].description;
        conditions.appendChild(addConditions);

        const addhilo = document.createElement("p");
        addhilo.textContent = data.main.temp_min+ " / " +data.main.temp_max;
        hilo.appendChild(addhilo);

        const addDate = document.createElement("p");
        addDate.textContent = todaysDate;
        todayDate.appendChild(addDate);
    })
    .catch(error => {
        console.log("Error fetching data: ", error)
        alert("Zipcode not found");
    })

});
