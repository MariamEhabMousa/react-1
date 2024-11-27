import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav className=" bg-primary-800 py-9 fixed z-50 left-0 right-0">
            <div className="container flex justify-between items-center">
                <h1>
                    <NavLink to="/"
                        className="text-white text-3xl uppercase font-bold">start framework</NavLink>
                </h1>


                <ul className="flex items-center gap-4 text-white">
                    <li>
                        <NavLink className={({ isActive }) => {
                            return `bg-transparent rounded-md py-2 px-3 font-bold text-lg ${isActive ? "!bg-primary-400" : ""} `
                        }
                        } to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => {
                            return `bg-transparent rounded-md py-2 px-3 font-bold text-lg ${isActive ? "!bg-primary-400" : ""}`
                        }} to="/portfolio">Portfolio</NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) => {
                            return `bg-transparent rounded-md py-2 px-3 font-bold text-lg ${isActive ? "!bg-primary-400" : ""}`
                        }} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    </>
}
