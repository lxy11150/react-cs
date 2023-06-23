import React from 'react'
import Headers from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { Outlet } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <Headers />
            <hr></hr>
            <Outlet />
            <Footer />
        </>
    )
}
export default Home;