import React from 'react'
import Header from '../Header/Header'
import Carousell from './carousel'
import Navbar from './Navbar'
import Multi_carousel from './Multi-carousel'

function Home() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Carousell/>
            <Multi_carousel/>
        </>
    )
}

export default Home
