import React from 'react'

const Button = (data) => {
    return(
        
            <a href={data.link}>
                <button class={data.class}>Read More</button>
            </a>
    )
}

export default Button