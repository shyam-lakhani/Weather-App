let APIKey = `430671bc5c21b0a075fc9b3d150b3fd9`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
let name = document.querySelector("#name");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let img = document.querySelector("#image");
let searchIcon = document.querySelector(".searchIcon");
async function getData(city){
    try{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`);
        let jsonData = await data.json();
        if(jsonData.cod == 400){
            alert("Please Enter Your Location");
            img.src = "error.gif";
            name.innerText = "";
            h3.innerText = "";
            h4.innerHTML = "";
        } else if(jsonData.cod == 404){
            img.src = "error.gif";
            alert("Sorry Location Not Found");
            img.src = "error.gif";
            name.innerText = "";
            h3.innerText = "";
            h4.innerHTML = "";
        } else {
        name.innerText = jsonData.name;
        h3.innerText = Math.floor(jsonData.main.temp)+"℃";
        h4.innerHTML = jsonData.weather[0].main;
        
        if(h4.innerHTML == 'Clouds'){
            img.src = "clouds.png";
        } else if(h4.innerHTML == 'Clear'){
            img.src = "cloudSun.png";
        } else if(h4.innerHTML == 'Rain'){
            img.src = "rain.png";
        } else if(h4.innerHTML == 'Snow'){
            img.src = "snow.png";
        } else if(h4.innerHTML == 'Haze'){
            img.src = "haze.png";
        } else if(h4.innerHTML == 'Strom'){
            img.src = "strom.png";
        } else{
            img.src = "imgNo.png";
        }
    }

    } catch(err){
        console.log(err);
    };
};


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    getData(search.value);
});

searchIcon.addEventListener("click", async (event) => {
    event.preventDefault();
    getData(search.value);
})





