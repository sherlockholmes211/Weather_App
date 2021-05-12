import React,{ useState, useContext,useEffect } from 'react'
import {AppContext} from '../../Context/ResponseContext';
import "./Content.css"
const Content = (props) => {
    const [date, setdate] = useState(new Date().toLocaleString())
    const resdat = useContext(AppContext);
    var weather ;
    var icon;
    var temp;
    var main_d
    if(props.valid){
        weather = props.weather["description"]
        icon = props.weather["icon"]
        temp = props.main["temp"] -273.15;
        main_d = props.weather["main"]
    }
    useEffect(() => {
        console.log("inside Content")
        console.log(props.res)
        console.log(props.weather)
        
    }, [props.res])
    return (
        <div className="Content-control">

            {props.valid&&
            <div class="appwrap">

            <main> 
                <section class="location">
                    <div class="city">{props.name}</div>
                    <div class="date">{date}</div>
                </section>
                <img className="hello" src={`http://openweathermap.org/img/w/${icon}.png`}></img>
                <div class="current">
                <div class="temp">{temp.toFixed(2)}<span>°c</span></div>
                <div class="weather">{main_d}</div>
                <div class="weather">{weather}</div>
                {/* <div class="hi-low">{temp}</div> */}
                </div>

            </main>
        </div>
            
            }
            
            {/* {props.weather["description"]} */}
            
        </div>
    )
}

export default Content
