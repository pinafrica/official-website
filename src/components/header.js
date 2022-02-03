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
      <section className='header'>
        <div className='columns is-centered'>
          <div className='column mt-6'>
            <figure className='image logo'>
              <img src='./img/logo.svg' alt='pinafrica' />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
export default Header
