import React from 'react'
import IncludeHelmet from './react-helmet'

// import {Link} from 'gatsby'

// const ListLink = props => {
//     <li class={props.class}>
//         <Link to={props.to}>{props.children}</Link>
//     </li>
// }
const Header = () => {
    return (
        <>
        <IncludeHelmet />
        <div class = "header">
            <div class = "header-image">
                <a href="/">
                    <img src = "./logo.svg" alt="pinafrica" />
                </a>
            </div>
        </div>
        </>
    )
}
export default Header