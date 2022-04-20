
function weatherfunction(){
  let city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e03bd0603feaf2d93788d91947c8d411`;



  fetch(url)
.then(function(res){
    return res.json();
}).then(function(res){
    append(res)
})
.catch(function(err){
    console.log(err)
})
}


function append(data){
    console.log(data)
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas")
    let detail = document.createElement("h2");
    detail.innerText = "Weather Details :- "
    let city = document.createElement("p");
    city.innerText = "City:"+data.name;
    let min = document.createElement("p");
    min.innerText = "Min Temp :"+data.main.temp_min;
    let max = document.createElement("p");
    max.innerText = "Max Temp :"+data.main.temp_max;
    let current = document.createElement("p");
    current.innerText = "Current Temp :"+data.main.temp;
    let riselogo = document.createElement("img");
    riselogo.src = "https://images.getpng.net/uploads/preview/sunrise-logo-template-sun-logo-templat6-1151631396665eoptrpw3ge.webp"
    let sunrise = document.createElement("p");
    
    sunrise.innerText = "Sunrise : "+data.sys.sunrise
    sunrise.append(riselogo);
    let sunset = document.createElement("p");
    let setlogo = document.createElement("img");
    setlogo.src = "https://img.freepik.com/free-vector/sunset-beach-logo-design_62569-187.jpg"
   
    sunset.innerText = "Sunset : "+data.sys.sunset;
    sunset.append(setlogo)
   container.append(detail,city,min,max,current,sunrise,sunset)
   map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}