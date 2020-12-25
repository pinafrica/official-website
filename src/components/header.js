import React from 'react'

// import {Link} from 'gatsby'

// const ListLink = props => {
//     <li class={props.class}>
//         <Link to={props.to}>{props.children}</Link>
//     </li>
// }
const Header = () => {
    return (
        <div class = "header">
            <div class = "header-image">
                <a href="/">
                    <img src = "./static/logo.svg" alt="pinafrica" />
                </a>
            </div>
        </div>
    )
}
export default Header