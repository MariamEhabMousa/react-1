import React from 'react'
import avatar from "../../assets/image/avataaars.svg"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return <>
        <Navbar />
        <div className="home pt-36 pb-20 bg-primary-400">
            <div className="home-image mb-10 flex justify-center items-center">
                <img src={avatar} className='w-60' alt="avatar" />
            </div>

            <div className="home-body mb-5 flex justify-center items-center">
                <h2 className='text-4xl text-white uppercase font-bold'>start framework</h2>
            </div>

            <div className="lines mb-5 flex justify-center items-center gap-3">
                <div className="line1 h-1 w-20 bg-white"></div>
                <i className="text-white fa-solid fa-star"></i>
                <div className="line2 h-1 w-20 bg-white"></div>
            </div>
            <p className='text-center text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        <Footer />
    </>
}
