import React from 'react'
import {Helmet} from 'react-helmet'
import '../assets/css/settings.css'
import '../assets/css/style.css'
import '../assets/css/main.css'
//fonts
import '../assets/fonts/ep-icon-fonts/css/style.css'
import '../assets/fonts/fontawesome-5/css/all.min.css'
//plugin
import '../assets/plugins/meanmenu/meanmenu.css'
import '../assets/plugins/slick-1.8.1/slick.css'
import '../assets/plugins/fancybox-master/jquery.fancybox.min.css'

const Style = () => {
    return (
        <Helmet>
            <title>Working</title>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
        </Helmet>
    )
}
export default Style