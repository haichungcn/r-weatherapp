import React from 'react' 

export default function Forecast(props) {
    
    if (props.onForecasts.length <= 0) return (<div></div>)
    else {
        return (
            <div className={`row forecastContainer ${props.class}`}>
                {props.onForecasts.map(forecast =>
                <div className="container forecast d-inline-block border-white">
                    <img src={`https://openweathermap.org/img/wn/${forecast.weather.icon}.png`} alt="weather icon" />
                    <p>forecast.weather.description</p>
                    <p className="lead">forecast.main.temp</p>
                </div>
                )}
            </div>
        )
    }
}
