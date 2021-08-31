let nasa = "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=O81ygYCev3rWCrLjcsVVDjfwZyZLiuUSoBpj9rwv";
let weather = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=b06441656303fc39a78c76c6a895875b";
let ticketMaster = "https://app.ticketmaster.com/discovery/v2/events/Events?apikey=H9DtrzESrzvhlh7JAteyOgVc1IsRuON8&locale=*"

fetch(nasa)
    .then(response => response.json())
    .then((nasaInfo) => {
        console.log(nasaInfo)
    })
