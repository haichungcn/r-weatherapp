import React, { useEffect, useState } from 'react';
import { weatherData, forecastData, cities, APIKEY } from '../utils/';
import Dropdown from './Dropdown';
// import Forecast from './Forecast'

export default function WeatherCard() {
    const [weather, setWeather] = useState(null);
    const [forecasts, setForecasts] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [invisible, setInvisible] = useState('invisible');

    const getCityLocation = (cityName) => {
        const city = cities.find(c => c.name === cityName);
        console.log(city.name);
        city && getData(city.latitude, city.longitude, 'metric');
        city && setCurrentLocation(city.name);
        setLat(parseFloat(city.latitude).toFixed(5));
        setLon(parseFloat(city.longitude).toFixed(5));
    }

    const getData = async (lat, lon, unit) => {
        const api = APIKEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api}&units=${unit}`
        const response = await fetch(url);
        const data = await response.json();
        data ? setWeather(data) : setWeather(weatherData);
        // // setWeather(weatherData);
        // console.log(data);
        // console.log(lat, lon, unit)
    }

    const getForecast = async (lat,lon,unit) => {
        const api = APIKEY;
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${api}&units=${unit}`
        const response = await fetch(url);
        const data = await response.json();
        data && setForecasts(data.list); 
    };

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((post) => {
            getData(post.coords.latitude, post.coords.longitude, 'metric');
            getForecast(post.coords.latitude, post.coords.longitude, 'metric');
            setLat(parseFloat(post.coords.latitude).toFixed(5));
            setLon(parseFloat(post.coords.longitude).toFixed(5));
        })
    }

    useEffect(() => {
        getLocation();
    }, [])

    const update = setInterval(() => {
            setCurrentTime(new Date());
        }, 1 * 1000);
        
    const today = new Date();

    const filterForecast = () => {
        let forecastByDay = [];
        for (let i = 1; i < 6; i++){
            let f = (forecasts.filter(day => parseInt(day.dt_txt.split(' ')[0].split('-')[2]) === (today.getDate() + i))[2]);
            console.log(f);
            forecastByDay[i-1] = f;
        }
        forecastByDay.length > 0 && setForecasts(forecastByDay);
        invisible ==  'invisible' ? setInvisible('visible') : setInvisible('invisible');
        console.log(forecasts, forecastByDay);
    }   

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
        <div className="App container-fluid text-white m-3">
            <div className="col mx-1 mt-3 mb-4 py-4 px-1 weatherCard m-2">
                <div className="row container align-items-center text-center m-0">
                    <h1 className="col-12 my-2 py-3 mx-0 text-success">
                        <strong>Awesome Weather App</strong>
                    </h1>
                    <div className="dropdown col-2 container text-center">
                        <button className="btn city dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-city text-muted"></i>
                        </button>
                        <Dropdown 
                            onGetCityLocation = {getCityLocation}
                            onCities = {cities}
                        />
                    </div>
                    <h2 className="col-8">
                        {weather ? weather.name : 'Location Name'}, {weather && weather.sys.country}
                        <p className="lead text-warning coordinateDisplay mt-3">{lat}°, {lon}°</p>
                    </h2>

                    <div className="col-2 container text-center"><a href="#" className="refresh"
                    onClick={() => currentLocation ? getCityLocation(currentLocation) : getLocation()}
                    ><i className="fas fa-sync-alt text-muted"></i></a></div>
                </div>

                <div className="row m-0 bottomContent">
                    <div className="col-12 col-md-4 text-danger d-flex justify-content-center align-items-center temp">
                        <p>{weather ? parseInt(weather.main.temp) : 'Temperature'}<span className="text-muted">°C</span></p>
                    </div>

                    <div className="col-12 col-md-4 d-flex p-0 flex-column justify-content-start align-items-center">
                        <div className="container mb-3 infoContainer d-flex justify-content-center align-items-start shadow">
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
                        <h2 className="clock mt-2">{currentTime.toLocaleTimeString()}</h2>
                        {/* <button className="btn btn-outline-warning" onClick={()=>filterForecast()}>Get Forecast</button> */}
                    </div>

                    <div className="col-12 col-md-4 description">
                        <div className="row d-flex justify-content-center">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon && weather.weather[0].icon}@2x.png`}></img>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <h4 className="">
                                {weather.weather[0].description ? weather.weather[0].description : 'Weather Description'}
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
