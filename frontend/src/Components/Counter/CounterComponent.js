import React from 'react'

const CounterComponent = (props) => {
    const {value,setvalue}=props
  
    return (
        <div>
            
            <h1>{value}</h1>
            <button onClick={()=>setvalue(value+1)}> Increment </button>
            <button onClick={()=>setvalue(value > 0 ? value-1 : 0)}> Decrement </button>
        
        </div>
    )
}

export default CounterComponent
