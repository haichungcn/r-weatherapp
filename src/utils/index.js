// import Unsplash from "unsplash-js";

// const unsplash = new Unsplash({
//     secret: "373b82e616caed1b2cba06fdeaa66a610850706f95bd2a4a98289cb97c0e1006",
//     applicationId:
//         "e2cce345132cafbef526b95e7e2dd9f131151f45cfc131cef1f5c60f25b4f138"
// });

const cities = [
    {
        name: "Saigon",
        latitude: 10.817141,
        longitude: 106.707954
    },
    {
        name: "Paris",
        latitude: 48.856613,
        longitude: 2.352222
    },
    {
        name: "New York",
        latitude: 40.712776,
        longitude: -74.005974
    },
    {
        name: "Miami",
        latitude: 25.761681,
        longitude: -80.191788
    },
    {
        name: "San Francisco",
        latitude: 37.774929,
        longitude: -122.419418
    },
    {
        name: "Moscow",
        latitude: 55.755825,
        longitude: 37.617298
    },
    {
        name: "Tokyo",
        latitude: 35.689487,
        longitude: 139.691711
    },
    {
        name: "Vancouver",
        latitude: 49.28273,
        longitude: -123.120735
    }
];

const weatherData = {
    "coord": {
        "lon": 106.71,
        "lat": 10.76
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 33,
        "pressure": 1007,
        "humidity": 52,
        "temp_min": 33,
        "temp_max": 33
    },
    "visibility": 10000,
    "wind": {
        "speed": 1,
        "deg": 90
    },
    "clouds": {
        "all": 75
    },
    "dt": 1571206871,
    "sys": {
        "type": 1,
        "id": 9314,
        "country": "VN",
        "sunrise": 1571179315,
        "sunset": 1571222129
    },
    "timezone": 25200,
    "id": 1566083,
    "name": "Thanh pho Ho Chi Minh",
    "cod": 200
};

export { weatherData, cities }