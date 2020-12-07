import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
    console.log(children.backgound)
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout