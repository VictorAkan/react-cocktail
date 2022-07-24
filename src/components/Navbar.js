import React from 'react'
import logo from "../images/nav--logo.svg"
import { Link } from "react-router-dom"
import { FaBars,FaTimes } from "react-icons/fa"
import { useState } from "react"

export default function Navbar() {
    const [showDiv, setShowDiv] = useState(false)
    const displaySidebar = () => {
        setShowDiv(true)
    }
    return (
        <div>
            <nav className="p-6 shadow hover:shadow-lg bg-gray-50 fixed top-0 right-0 left-0 z-40">
                <div className="nav-center flex">
                    <div className="nav--header">
                        <img src={logo} />
                    </div>
                    <div className="nav--links ml-auto md:visible invisible">
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="visible md:invisible">
                        <button onClick={displaySidebar} className="transparent">
                            <FaBars />
                        </button>
                    </div>
                </div>
                {showDiv ? <div className="sidebar--links md:invisible">
                        <ul className="block space-y-2">
                            <li className="flex">
                                <button onClick={() => setShowDiv(false)} className="transparent"><FaTimes /></button><Link to="/">Home</Link>
                            </li>
                            <li className="ml-4">
                                <Link to="/about">About Us</Link>
                            </li>
                        </ul>
                    </div> : ""}
            </nav>
        </div>
    )
}
