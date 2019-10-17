import React from 'react'

export default function Dropdown(props) {
    return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {props.onCities.map(city => {
                return (
                <a className="dropdown-item"  onClick={() => props.onGetCityLocation(city.name)}>
                {city.name}
                </a>
                )
            })}
        </div>
    )
}
