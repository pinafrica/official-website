import React from 'react'

const Button = (data) => {
    console.log(data)
    return(
        <a href={data.link}>
            <button class={data.class}>{data.value}</button>
        </a>
    )
}

export default Button