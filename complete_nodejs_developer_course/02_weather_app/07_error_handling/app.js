const request = require('request');

// ======== LOCATION ============ ==>

const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamcyMzMxIiwiYSI6ImNqeXRkN2hzcjAybzkzZ28wY3B5NmE5amIifQ.xDY6T9sOjVAcbUBOUKUeBg&limit=1'

request({url: location_url, json: true}, (error, response)=>{
    console.log(`Lat is: ${response.body.features[0].center[1]}, Long is: ${response.body.features[0].center[0]}`)
})

// ======== WEATHER ============ ==>

const weather_url = 'https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233?units=us'

request({ url: weather_url, json: true }, (error, response) => {
    const data = response.body;
    console.log(`It is currently ${data.currently.temperature} degrees in ${data.timezone} on a ${data.currently.summary} Day with a ${data.currently.precipProbability}% chance of rain.`)
})
