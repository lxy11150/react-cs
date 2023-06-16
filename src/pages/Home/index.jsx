import React from 'react'
import Header from '../../components/Header/header'
import { Outlet } from 'react-router-dom'


const Home = () => {

    return (
        <>
            <Header />
            <hr></hr>
            <Outlet />
        </>
    )
}
export default Home;