import React, { useState } from 'react'

const CounterApp = () => {
    const [Count, setCount] = useState(0)
    const [disable, setdisable] = useState()
    const [disable2, setdisable2] = useState()
    const handleIncrese = () => {
        setCount(Count + 1)
        if (Count > 4) {
            setdisable(true)
        } else {
            setdisable(false)
            setdisable2(false)
        }
    }

    const handleDecrement = () => {
        setCount(Count - 1)
        if (Count === -4) {
            setdisable2(true)
        } else {
            setdisable2(false)
            setdisable(false)
        }
    }
    const handleReset = () => {
        setCount(0)

    }

    return (
        <div>
            <h1>{Count}</h1>
            <button onClick={handleIncrese} disabled={disable} >+</button>
            <button onClick={handleDecrement} disabled={disable2}>-</button>
            <button onClick={handleReset}>0</button>
        </div>
    )
}

export default CounterApp