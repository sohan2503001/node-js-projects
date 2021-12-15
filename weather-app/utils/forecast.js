const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=733d154e5afc9b22ac319f3074fba99c&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + ''

    request({
                url: url,
                json: true,
            },
            (error, response) => {
                if (error) {
                    callback("Unable to connect to weather service", undefined);
                } else if (response.body.error) {
                    callback("Unable to find location", undefined);
                } else {
                    callback(
                        undefined,`${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degree out. But it feels like ${response.body.current.feelslike}`
                    );
                }
            }
        )
}

module.exports = forecast