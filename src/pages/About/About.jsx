import React from 'react'

export default function About() {
    return <>
        <div className="about bg-primary-400">
            <div className="container py-52 flex-col justify-center items-center">
                <h2 className='text-white mb-5 text-4xl text-center uppercase font-bold'>about component</h2>

                <div className="lines mb-10 flex justify-center items-center gap-3">
                    <div className="line1 h-1 w-20 bg-white"></div>
                    <i className="text-white fa-solid fa-star"></i>
                    <div className="line2 h-1 w-20 bg-white"></div>
                </div>

                <div className="paragraph px-20 flex gap-2">
                    <p className='text-white'>Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files including HTML, CSS, and JavaScript as well as optional
                        SASS stylesheets for easy customization.</p>
                    <p className='text-white'>Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files including HTML, CSS, and JavaScript as well as optional
                        SASS stylesheets for easy customization.</p>
                </div>


            </div>
        </div>

    </>
}
