var cityFormEl = document.querySelector("#city-form");
var searchBarEl = document.querySelector("#searchBar");
var forecastContainerEl = document.querySelector("#forecast-container");
var temperatureEl = document.querySelector("#show-temperature");
var windEl = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");

citiesStore = []

var citySubmitHandler = function(event) {
    event.preventDefault();
    var searchBar = searchBarEl.ariaValueMax.trim();
       
       if (searchBar) {
           getForecast(searchBar);
           searchBarEl.value = "";
       } else {
           alert("Enter a valid city name");
       }
};

var getForecast = function(city) {
    // * Need request to the url here
    fetch("")
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {

                var {lat} = data.coord;
                var {lon} = data.coord;

    fetch("")
        .then = function(response) {
            if(response.ok) {
                response.json().then(function(data) {
      })
      }
        }
        console.log(data);
        displayForecast(data, city)
    });
} else {
    alert ("error" + response.statusText);
}
}) 
.catch(function(error) {
    alert("Unable to connect");
});

}