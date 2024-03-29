import React from 'react'
import { useHistory } from 'react-router-dom'
import NavItem from './NavItem'

function Nav() {
  const history = useHistory();
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Smart Fishery Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Smart Fishery</span>
          </a>
          <div className="flex items-center lg:order-2">
            <button onClick={() => history.push("/login")} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</button>
            <button onClick={() => history.push("/login")} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</button>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <img src="/icons/menu.svg" className="h-6" alt="" />
            </button>

          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <NavItem label="Home" active={true} />
              <NavItem label="goals" />
              <NavItem label="services" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav