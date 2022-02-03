import React from 'react'
import { Helmet } from 'react-helmet'

const IncludeHelmet = () => {
    return (
        <Helmet title="" defer={false}>
            <link rel="apple-touch-icon" sizes="192x192" href="./img/android-chrome-192x192" />
            <link rel="apple-touch-icon" sizes="512x512" href="./img/android-chrome-512x512" />
            <link rel="apple-touch-icon" sizes="180x180" href="./img/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png" />
            <link rel="manifest" href="./img/site.webmanifest" />
        </Helmet>
    )
}

export default IncludeHelmet