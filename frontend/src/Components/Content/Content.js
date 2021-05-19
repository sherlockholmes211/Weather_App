import React,{ useState,useMemo } from 'react'

import "./Content.css"
import ContentInside from './ContentInside';
const Content = (props) => {

    const {res} = props;
    const [display, setdisplay] = useState(false);    

    useMemo(() => {
        if((props.valid&&res["cod"] !== "404")){
            console.log("display true condition")
            setdisplay(true);
        }
        if(props.valid&&res["cod"] === "404"){
            console.log("display false condition")
            setdisplay(false);
        }
        console.log(res);
        console.log("if cond  ")
    }, [res,props.valid])

    return (
        <div className="Content-control">
            { display && <ContentInside res={res}/>}            
        </div>
    )
}

export default Content
