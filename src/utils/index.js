// import Unsplash from "unsplash-js";

// const unsplash = new Unsplash({
//     secret: "373b82e616caed1b2cba06fdeaa66a610850706f95bd2a4a98289cb97c0e1006",
//     applicationId:
//         "e2cce345132cafbef526b95e7e2dd9f131151f45cfc131cef1f5c60f25b4f138"
// });

const APIKEY='34c77a8033259550c71448ec1fda10ad'

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

const forecastData = {
    "cod": "200",
    "message": 0.0067,
    "cnt": 5,
    "list": [
        {
            "dt": 1571475600,
            "main": {
                "temp": 306.25,
                "temp_min": 304.23,
                "temp_max": 306.25,
                "pressure": 1008.69,
                "sea_level": 1008.69,
                "grnd_level": 1007.46,
                "humidity": 64,
                "temp_kf": 2.02
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 1.36,
                "deg": 251.552
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-10-19 09:00:00"
        },
        {
            "dt": 1571486400,
            "main": {
                "temp": 302.06,
                "temp_min": 300.541,
                "temp_max": 302.06,
                "pressure": 1010.14,
                "sea_level": 1010.14,
                "grnd_level": 1008.78,
                "humidity": 76,
                "temp_kf": 1.52
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 0.97,
                "deg": 256.222
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-10-19 12:00:00"
        },
        {
            "dt": 1571497200,
            "main": {
                "temp": 300.34,
                "temp_min": 299.33,
                "temp_max": 300.34,
                "pressure": 1011.52,
                "sea_level": 1011.52,
                "grnd_level": 1010.26,
                "humidity": 83,
                "temp_kf": 1.01
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.47,
                "deg": 58.369
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-10-19 15:00:00"
        },
        {
            "dt": 1571508000,
            "main": {
                "temp": 298.93,
                "temp_min": 298.42,
                "temp_max": 298.93,
                "pressure": 1010.43,
                "sea_level": 1010.43,
                "grnd_level": 1009.33,
                "humidity": 88,
                "temp_kf": 0.51
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.56,
                "deg": 352.872
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-10-19 18:00:00"
        },
        {
            "dt": 1571518800,
            "main": {
                "temp": 297.252,
                "temp_min": 297.252,
                "temp_max": 297.252,
                "pressure": 1009.91,
                "sea_level": 1009.91,
                "grnd_level": 1008.73,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.73,
                "deg": 7.854
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-10-19 21:00:00"
        }
    ],
    "city": {
        "id": 1580578,
        "name": "Thành phố Hồ Chí Minh",
        "coord": {
            "lat": 10.8333,
            "lon": 106.6667
        },
        "country": "VN",
        "timezone": 25200,
        "sunrise": 1571438543,
        "sunset": 1571481248
    }
}

export { weatherData, forecastData, cities, APIKEY }