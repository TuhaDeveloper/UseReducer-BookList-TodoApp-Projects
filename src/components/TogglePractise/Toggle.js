import React, { useState } from 'react'

const Toggle = () => {
    const [Toggle, setToggle] = useState(true)
    return (
        <div>
            {Toggle && (
                <p>this is show and hide tuturial for check toggle is working or not</p>
            )}
            <button onClick={() => { setToggle(!Toggle) }}>{Toggle ? "Hide" : "Show"}</button>
        </div>
    )
}

export default Toggle