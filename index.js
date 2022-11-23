const express = require('express');
const cors = require('cors');

const app = express();

const data = require("./data.json")

app.use(cors());
app.get('/app-api/v1/photo-gallery-feed-page/page/1', (request, response) => {
    response.json(data.data1)
})

app.get('/app-api/v1/photo-gallery-feed-page/page/2', (request, response) => {
    response.json(data.data2)
})

app.get('/app-api/v1/photo-gallery-feed-page/page/3', (request, response) => {
    response.json(data.data3)
})
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})