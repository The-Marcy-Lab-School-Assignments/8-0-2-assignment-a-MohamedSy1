require('dotenv').config(); // This line should be at the very top of your index.js file
const fetchData = require('./utils/fetchData')
const express = require('express')
const path = require('path')

const app = express()


// creating a direct path to the dist folder in order to prevent losing track of the folder if it was to go to another host
const directPathToDist = path.join(__dirname, "..", "giphy-search", "dist")

//serving the dist static assets 
const serveStatic = express.static(directPathToDist)
app.use(serveStatic)

const serveGif = async (req, res, next) => {
    const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;
    try {
        const [data, error] = await fetchData(API_URL)
        res.send(data)
    } catch (error) {
        if (error) {
            console.log(`Error from the server: ${error.message}`)
            res.sendStatus(404)
        }
    }
}

const serveSearch = async (req, res, next) => {
    const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&q=${req.query.q}limit=3&rating=g`;
    try {
        const [data, error] = await fetchData(API_URL)
        res.send(data)
    } catch (error) {
        console.log(`Error from searching: ${error.message}`)
        res.sendStatus(404)
    }
}

app.get('/api/gifs', serveGif)
app.get('/api/search', serveSearch)
app.listen(process.env.PORT, () => {
    `listening to port 8080`
})