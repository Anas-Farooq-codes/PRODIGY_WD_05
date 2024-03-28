'use strict';

export const weekDayNames = [

    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const monthNames = [

    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",

]

/**
* @param {number} dataUnix Unix date in seconds
* @param {number} timezone Timezone shift from UTC in seconds
* @returns {string} Date Sting.formate: "Thursday 21, Mar"
*/


export const getDate = function(dataUnix, timezone) {

    const date = new Date((dataUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()} ${monthName}`;
}

/**
* @param {number} timeUnix Unix date in seconds
* @param {number} timezone Timezone shift from UTC in seconds
* @returns {string} Time Sting.formate: "HH:MM AM/PM"
*/

export const getTime = function(timeUnix, timezone) {

    const date = new Date((timeUnix + timezone) * 1000) 
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM" ;

    return `${hours % 12 || 12}:${minutes} ${period}`;
}



/**
* @param {number} timeUnix Unix date in seconds
* @param {number} timezone Timezone shift from UTC in seconds
* @returns {string} Time Sting.formate: "HH AM/PM"
*/

export const getHours = function(timeUnix, timezone) {

    const date = new Date((timeUnix + timezone) * 1000) 
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM" ;

    return `${hours % 12 || 12} ${period}`;
}

/**
* @param {number} mps Meter per seconds
* @returns {number} Kilometer per hours 
*/

export const mps_to_kmh = mps => {

    const mph = mps * 3600;
    return mph / 1000 
}

export const aqiText = {

    1: {

        level: "Excellent",
message: "Air quality is considered satisfactory, with minimal presence of pollutants and low health risks."
    },

    2: {
level: "Good",
message: "Air quality is deemed acceptable, although some pollutants are detected, posing slight risks, especially to sensitive individuals."
    },

    3: {

        level: "Fair",
    message: "Air quality is moderate, indicating the presence of pollutants that may pose health concerns, particularly for sensitive groups. Limit outdoor activities."
    },

    4: {

        level: "Poor",
    message: "Air quality is poor, with notable levels of pollutants that could affect health, especially for vulnerable individuals. Consider reducing outdoor exposure."
    },

    5: {

        level: "Very Poor",
    message: "Air quality is very poor, presenting significant health risks to all individuals. Minimize outdoor activities and stay indoors when possible, especially for vulnerable groups."
    }

}


