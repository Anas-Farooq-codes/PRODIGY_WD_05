

'use strict';

// FETCHING API 

const api_key = "d10ebce697fa83fc566a5447b4f8e3df";


/**
*Fetch data from server
* @param {String} URL API url
* @param {function} callback
*/
export const fetchData = function(URL, callback) {

    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json() )
    .then(data => callback(data));
}

export const url = {
 currentWeather(lat, lon) {
  return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon) {

        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
airPollution(lat, lon) {

    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
},
reverseGeo(lat, lon) {

    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
},
geo(query) {

/**
* @param {string} query Search query e.g.: "Karachi" , "Haiti"
*/

    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
}
}