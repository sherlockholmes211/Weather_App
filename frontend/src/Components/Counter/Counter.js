import React, { useState } from 'react'
import CounterComponent from './CounterComponent'

const Counter = () => {
    const [value, setvalue] = useState(0)
    return (
        <div>
            
            <CounterComponent value={value} setvalue={setvalue}/>
        </div>
    )
}

export default Counter
