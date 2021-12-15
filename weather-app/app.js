const request = require("request");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast.js')

geocode('Chandrapur', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(79.3, 19.95, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})