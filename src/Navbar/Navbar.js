import React from 'react'
import './Navbar.css'
import {Link } from 'react-router-dom'
const Navbar = () => (
    <ul className='Navbar'>
        <li>
            <Link to="/">
            <button>
                Shop
            </button>
            </Link>
        </li>
        <li>
            <Link to="/about">
                <button>
                    About
                </button>
            </Link>
        </li>
        <li>
        <Link to="/Contact">
            <button>
                Contact
            </button>
        </Link>
        </li>
    </ul>
)
export default Navbar