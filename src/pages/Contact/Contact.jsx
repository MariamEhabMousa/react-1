import React from 'react'

export default function Contact() {
    return <>
        <div className="contact pt-36 pb-10">
            <h2 className='text-primary-800 mb-5 text-4xl text-center uppercase font-bold'>contact component</h2>

            <div className="lines mb-10 flex justify-center items-center gap-3">
                <div className="line1 h-1 w-20 bg-primary-800"></div>
                <i className="text-primary-800 fa-solid fa-star"></i>
                <div className="line2 h-1 w-20 bg-primary-800"></div>
            </div>
            <div className="container">
                <form className='space-y-5 w-full'>
                    <div className='flex justify-center items-center'>
                        <input className='outline-none w-1/2 border-b-2 border-b-slate-300 py-3 px-1'
                            type="text" placeholder='UserName' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <input className='outline-none w-1/2 border-b-2 border-b-slate-300 py-3 px-1'
                            type="number" placeholder='UserAge' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <input className='outline-none w-1/2 border-b-2 border-b-slate-300 py-3 px-1'
                            type="emial" placeholder='UserEmail' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <input className='outline-none w-1/2 border-b-2 border-b-slate-300 py-3 px-1'
                            type="password" placeholder='UserPassword' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='cursor-pointer bg-primary-300 text-white py-2 px-2 rounded-md' type='button'>send Message</button>

                    </div>
                </form>
            </div>
        </div>
    </>
}
