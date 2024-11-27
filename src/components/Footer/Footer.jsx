import React from 'react'

export default function Footer() {
    return <>
        <div className="content bg-primary-800">
            <div className="container flex justify-between px-20 py-28">
                <div className="location">
                    <h2 className='text-white mb-3 text-3xl font-semibold uppercase'>location</h2>
                    <p className='text-white mb-3 text-center'>2215 John Daniel Drive</p>
                    <p className='text-white text-center'>Clark, MO 65243</p>
                </div>

                <div className="around">
                    <h2 className='text-center text-white mb-3 text-3xl font-semibold uppercase'>around the web</h2>
                    <div className='flex gap-10 justify-center items-center'>

                        <div className='flex gap-10 justify-center items-center border-white text-white w-8 h-8 rounded-full border'>
                            <i className="  fa-brands fa-facebook"></i>
                        </div>

                        <div className='flex gap-10 justify-center items-center border-white text-white w-8 h-8 rounded-full border'>
                            <i className="  fa-brands fa-twitter"></i>
                        </div>
                        <div className='flex gap-10 justify-center items-center border-white text-white w-8 h-8 rounded-full border'>
                            <i className="  fa-brands fa-linkedin"></i>
                        </div>
                        <div className='flex gap-10 justify-center items-center border-white text-white w-8 h-8 rounded-full border'>
                            <i className="  fa-solid fa-globe"></i>
                        </div>
                    </div>
                </div>

                <div className="about">
                    <h2 className='text-white mb-3 text-center text-3xl font-semibold uppercase'>about freelancer</h2>
                    <p className='text-white text-center max-w-md'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>

            </div>
        </div>

        <footer className="py-5 copy-right bg-slate-900 text-gray-400 text-center">
            <p>Copyright © Your Website 2021</p>
        </footer>

    </>
}
