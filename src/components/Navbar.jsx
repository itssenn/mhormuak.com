import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
        <div className="Navbar">
            <ul className='menu'>
                <li className='menu-link'>
                    <a href="/about">เกี่ยวกับหมอหมึก</a>
                </li>
                <li className='menu-link'>
                    <a href="/blog">บทความ</a>
                </li>
                <li className='menu-link'>
                    <a href="/queue">จองคิว</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar