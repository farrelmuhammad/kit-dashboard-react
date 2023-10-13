import React from 'react'
import PageErrorMessage from '../components/PageErrorMessage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Notfound = ({ title, body }) => {
    console.log(title, body)
    return (
        <>
            <Navbar />
            <PageErrorMessage title={title} body={body} />
            <Footer />
        </>
    )
}

export default Notfound