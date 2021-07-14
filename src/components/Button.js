import React from 'react'

const Button = ({clicked}) => {
    return (
        <div>
            <button onClick={clicked}>Get users</button>
        </div>
    )
}

export default Button
