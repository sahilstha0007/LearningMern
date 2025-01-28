import React, { useEffect, useState } from 'react'

function LoggerComponent() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("Component rendered or count changed:", counter)
    },)

    return (
        <div>
            <h1>Count /</h1>
            <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
        </div>
    )
}

export default LoggerComponent
