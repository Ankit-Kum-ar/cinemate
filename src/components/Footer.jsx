import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-white border-t-2 dark:border-b-2 dark:border-gray-800 shadow p-1 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <NavLink to="#" className="hover:underline me-4 md:me-6">Instagram</NavLink>
            </li>
            <li>
                <NavLink to="#" className="hover:underline me-4 md:me-6">Linkedin</NavLink>
            </li>
            <li>
                <NavLink to="#" className="hover:underline me-4 md:me-6">Github</NavLink>
            </li>
            <li>
                <NavLink to="#" className="hover:underline">Twiiter</NavLink>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer