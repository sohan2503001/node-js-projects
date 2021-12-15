const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('Please provide my Adress')
} else {
    geocode(address, (error, data) => {
        if (error) {
            console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            if (error) {
                console.log(error)
            }

            console.log(data.location)
            console.log(forecastdata)
        })
    })
}