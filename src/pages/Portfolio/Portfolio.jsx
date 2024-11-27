import React from 'react'

import port1 from "../../assets/image/poert1.png"
import port2 from "../../assets/image/port2.png"
import port3 from "../../assets/image/port3.png"


export default function Portfolio() {
    return <>
        <div className="content pt-36 pb-10">
            <h2 className='text-center text-4xl mb-5 text-primary-800 font-bold uppercase'>portfolio component</h2>

            <div className="lines mb-10 flex justify-center items-center gap-3">
                <div className="line1 h-1 w-20 bg-primary-800"></div>
                <i className="text-primary-800 fa-solid fa-star"></i>
                <div className="line2 h-1 w-20 bg-primary-800"></div>
            </div>

            <div className="container">
                <div className="grid gap-10 grid-cols-12">
                    <div className="cursor-pointer relative col-span-4 rounded-md overflow-hidden">
                        <img src={port1} alt="" />
                        <div className="layer absolute opacity-0 bg-primary-300 hover:opacity-90 transition-opacity duration-300 top-0 bottom-0 right-0 flex justify-center items-center left-0">
                            <i className="text-white text-8xl fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="cursor-pointer col-span-4 relative rounded-md overflow-hidden">
                        <img src={port2} alt="" />
                        <div className="layer absolute opacity-0 bg-primary-300 hover:opacity-90 transition-opacity duration-300 top-0 bottom-0 right-0 flex justify-center items-center left-0">
                            <i className="text-white text-8xl fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="cursor-pointer col-span-4 relative rounded-md overflow-hidden">
                        <img src={port3} alt="" />
                        <div className="layer absolute opacity-0 bg-primary-300 hover:opacity-90 transition-opacity duration-300 top-0 bottom-0 right-0 flex justify-center items-center left-0">
                            <i className="text-white text-8xl fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="cursor-pointer col-span-4 relative rounded-md overflow-hidden">
                        <img src={port1} alt="" />
                        <div className="layer absolute opacity-0 bg-primary-300 hover:opacity-90 transition-opacity duration-300 top-0 bottom-0 right-0 flex justify-center items-center left-0">
                            <i className="text-white text-8xl fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="cursor-pointer col-span-4 relative rounded-md overflow-hidden">
                        <img src={port2} alt="" />
                        <div className="layer absolute opacity-0 bg-primary-300 hover:opacity-90 transition-opacity duration-300 top-0 bottom-0 right-0 flex justify-center items-center left-0">
                            <i className="text-white text-8xl fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="cursor-pointer col-span-4 relative rounded-md overflow-hidden">
                        <img src={port3} alt="" />
                        <div className="layer absolute opacity-0 bg-primary-300 hover:opacity-90 transition-opacity duration-300 top-0 bottom-0 right-0 flex justify-center items-center left-0">
                            <i className="text-white text-8xl fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
