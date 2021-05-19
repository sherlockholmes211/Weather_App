import React from 'react'

const ContentInside = (props) => {
    const {res} = props;
    const date = new Date().toLocaleString()
    return (
        <div>
                <div class="appwrap"> 
                <section className="location">
                    <div className="city">{res.name}</div>
                    <div className="date">{date}</div>
                </section>
                <img className="hello" alt="hello" src={`http://openweathermap.org/img/w/${res.weather[0].icon}.png`}></img>
                <div className="current">
                <div className="temp">{(res.main["temp"]-273.15).toFixed(2)}<span>°c</span></div>
                <div className="weather">{res.weather[0].main}</div>
                <div className="weather">{res.weather[0].description}</div>
                {/* <div class="hi-low">{temp}</div> */}
                </div>

            
        </div>
        </div>
    )
}

export default ContentInside
