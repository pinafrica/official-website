import React from 'react'

const Button = (data) => {
    return(
        <button class={data.class}>{data.value}</button>
    )
}

export default Button