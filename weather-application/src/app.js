const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast.js')
const path = require('path')
const express = require('express')
const hbs = require('hbs');
const { query } = require('express');

const app = express();
const port = process.env.PORT || 3000;

//Define paths for Express congif
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public/')))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sohan Jambhule'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Sohan Jambhule'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Sohan Jambhule',
        message: 'Hey Hi ,Myself Sohan if you need any help with application please let me know'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log(error)
            }

            res.send({
                    forecast: forecastdata,
                    location,
                    address: req.query.address,
                })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search'
        })
    }
    res.send({
        product: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'sohan jambhule',
        errormessage: 'help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '4040',
        name: 'Sohan Jambhule',
        errormessage: 'Page not found'
    })
});

app.listen(port, () => {
    console.log('Server is up on port' + port)
})