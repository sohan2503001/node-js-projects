const request = require("request");

// const url =
//     "http://api.weatherstack.com/current?access_key=733d154e5afc9b22ac319f3074fba99c&query=19.9615,79.2961&units=f";

// request({
//         url: url,
//         json: true,
//     },
//     (error, response) => {
//         if (error) {
//             console.log("Unable to connect to weather service");
//         } else if (response.body.error) {
//             console.log("Unable to find location");
//         } else {
//             console.log(
//                 `${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degree out. But it feels like ${response.body.current.feelslike}`
//             );
//         }
//     }
// );

// const geocodeURL =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic29oYW4yNSIsImEiOiJja3g1eDlvaHQwNGRwMnVvMHZqZHBhanFrIn0.BriL-prxo9cr5Rg8DXzorA&limit=1";

// request({
//         url: geocodeURL,
//         json: true,
//     },
//     (error, response) => {
//         if (error) {
//             console.log("Unable to connect to location service");
//         } else if (response.body.features.length === 0) {
//             console.log("Error to find location");
//         } else {
//             const latitude = response.body.features[0].center[0];
//             const longitude = response.body.features[0].center[1];
//             console.log(latitude, longitude);
//         }
//     }
// );


const geocode = require('./utils/geocode')

geocode('Chandrapur', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})