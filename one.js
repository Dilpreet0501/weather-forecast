let weather = {  
  
  apiKey: "dc91f8c5741a2d36c6a9fd28efb5de68",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data)=>{
        console.log(data)
        this.display(data)}  );
  },
  display : function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
   
    const {visibility}= data ;
    document.querySelector(".visibility").innerText= "Visibility " + visibility ;
    document.querySelector(".place").innerText = "Weather in " + name;
   
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector("#text").value);
  },
};

document.querySelector(".search").addEventListener("click", function () {
  weather.search();
});
function time(){
  document.querySelector(".date").innerHTML=new Date().toLocaleDateString();
  var date =new Date().getDay();
  if(date==1){
    document.querySelector(".time").innerHTML="Monday"
  }
  else if(date==2){
    document.querySelector(".time").innerHTML="Tuesday"
  }
  else if(date==3){
    document.querySelector(".time").innerHTML="Wednesday"
  }
  else if(date==4){
    document.querySelector(".time").innerHTML="Thrusday"
  }
  else if(date==5){
    document.querySelector(".time").innerHTML="Friday"
  }
  else if(date==6){
    document.querySelector(".time").innerHTML="Saturday"
  }
  else if(date==7){
    document.querySelector(".time").innerHTML="Sunday"
  }
};
time() ;

function onlord(){
  let d = "delhi" ;
  weather.fetchWeather(d) ;
};
onlord();

document.querySelector(".get").addEventListener("click",e=>{
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(geoDisplay,geoError);}
  else{
    alert("The Browser Don`t Support GeoLocation")
  }
});
 function geoError(){
  alert("You Have Denied GeoLocation Permisson")
 };


function geoDisplay(GeolocationPosition) {
  var lon = GeolocationPosition.coords.longitude ;
  var lat = GeolocationPosition.coords.latitude ;
 
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=`+lat+`&lon=`+lon+`&appid=dc91f8c5741a2d36c6a9fd28efb5de68`
  )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data)
      display(data)}  );
};
 function display(data){
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
 
    const {visibility}= data ;
   
   
  document.querySelector(".place").innerText = "Weather in " + name;
  document.querySelector(".visibility").innerText= "Visibility " + visibility ;
  
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = Math.round(temp-273) + "°C";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + speed + " km/h";
};



