import React, { useEffect, useState } from 'react';
import { weatherData, cities } from '../utils/';

export default function WeatherCard() {
    const [weather, setWeather] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    // const getCityLocation = (cityName) => {
    //     const city = cities.find(c => c.name === cityName);
    //     console.log(city);
    //     city && getData(city.latitude, cities.longitude, 'metric');
    //     city && setCurrentLocation(city.name);
    // }


    const getData = async (lat, lon, unit) => {
        const api = '34c77a8033259550c71448ec1fda10ad';
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api}&units=${unit}`
        const response = await fetch(url).catch(error => alert(error))
        const data = await response.json();
        data ? setWeather(data) : setWeather(weatherData);
        // setWeather(weatherData);
        console.log(data);
        console.log(lat, lon, unit)
    }

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((post) => {
            getData(post.coords.latitude, post.coords.longitude, 'metric');
        })
    }

    useEffect(() => {
        getLocation();
    }, [])

    if (!weather) {
        return (
            <div className="App">
                <div className="css-dptuu5">
                    <div className="css-26qlqt">
                    </div>
                    <div className="css-wf5wj2">
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="App container-fluid text-white my-auto">
            <div className="container mx-auto my-4 py-4 weatherCard">
                <div className="row align-items-center text-center">
                    <h1 className="col-12 my-2 py-3 text-success">
                        <strong>Awesome Weather App</strong>
                    </h1>
                    <div class="dropdown col-2 container text-right">
                        <a className="city dropdown-toggle" 
                        // onChange={getCityLocation()} 
                        href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-city text-muted"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {/* {cities.map(city => <a class="dropdown-item" href="#" onClick={getCityLocation(city.name)}>{city.name}</a>)} */}
                        </div>
                    </div><h2 className="col-8">
                        {weather ? weather.name : 'Location Name'}, {weather && weather.sys.country}
                    </h2>
                    <div className="col-2 container text-left"><a href="#" className="refresh"
                    // onClick={
                    //     // currentLocation ? getCityLocation(currentLocation) : getLocation()
                    // }
                    ><i class="fas fa-sync-alt text-muted"></i></a></div>
                </div>

                <div className="row mt-3">
                    <div className="col-12 col-md-4 text-danger d-flex justify-content-center align-items-center temp">
                        <p>{weather ? weather.main.temp : 'Temperature'}<span className="text-muted">°C</span></p>
                    </div>

                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="container infoContainer d-flex justify-content-center align-items-start shadow">
                            <div className="container info d-flex justify-content-center align-items-start">
                                <p className="infoContent">
                                    {weather ? `Min Temp: ${weather.main.temp_min}°C` : 'Min Temp'}<br></br>
                                    {weather ? `Max Temp: ${weather.main.temp_max}°C` : 'Max Temp'}<br></br>
                                    {weather ? `Humidity: ${weather.main.humidity}` : 'Humidity'}<br></br>
                                    {weather ? `Pressure: ${weather.main.pressure}` : 'Pressure'}<br></br>
                                    {weather ? `Visibility: ${weather.visibility}` : 'Visibility'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 description">
                        <div className="row d-flex justify-content-center">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon && weather.weather[0].icon}@2x.png`}></img>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <h3 className="">
                                {weather.weather[0].description ? weather.weather[0].description : 'Weather Description'}
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
