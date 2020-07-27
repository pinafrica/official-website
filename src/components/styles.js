import React from 'react'
import { Helmet } from 'react-helmet'
import '../assets/style/main.css'

const Style = ({children}) => {
  return (
    <>
    <Helmet>
        <title>Pearl Impact Netwoorks Africa</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
    </Helmet>
    {children}
    </>
  )
}

export default Style