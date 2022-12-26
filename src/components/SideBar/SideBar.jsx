import React from 'react'
import { useHistory } from 'react-router-dom'

function SideBar() {
  const history = useHistory();
  return (
    <div>
      <nav className="px-6 py-6 bg-gray-800 lg:hidden">
        <div className="flex items-center justify-between">
          <a className="text-2xl font-semibold text-white" href="#">
            <img className="h-10" src="artemis-assets/logos/artemis-logo.svg" alt="" width="auto" />
          </a>
          <button className="flex items-center rounded navbar-burger focus:outline-none">
            <svg className="block w-8 h-8 p-2 text-white bg-indigo-500 rounded hover:bg-indigo-600" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="relative z-50 hidden lg:block navbar-menu">
        <div className="fixed inset-0 bg-gray-800 navbar-backdrop lg:hidden opacity-10"></div>
        <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-3/4 pt-6 pb-8 overflow-y-auto bg-gray-800 lg:w-80 sm:max-w-xs">
          <div onClick={() => history.push("/")} className="flex items-center w-full px-6 pb-6 mb-6 border-gray-700 cursor-pointer lg:border-b">
            <h1 className="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white">Smart Fishery</h1>
          </div>
          <div className="px-4 pb-6 space-y-4">
            <h3 className="mb-2 text-xs font-medium text-gray-500 uppercase">Operations</h3>
            <ul className="text-sm font-medium">
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 bg-indigo-500 rounded text-gray-50" href="#">
                  <span>Fish Ponds</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Location</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Cooperatives</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Fish Types</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Fish Diseases</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Recommended Treatment</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Permission</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Environment</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Product</span>
                </a>
              </li>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                  <span>Users</span>
                </a>
              </li>
            </ul>
            <h3 className="mb-2 text-xs font-medium text-gray-500 uppercase">Predictions</h3>
            <ul className='text-sm font-medium'>
              <li>
                <a className="flex items-center py-3 pl-3 pr-2 rounded hover:bg-gray-900 text-gray-50" href="#">
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>

            <div className="pb-8">
              <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                <span className="inline-block mr-4">
                  <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                  </svg>
                </span>
                <span>Home</span>
              </a>
              <a className="flex items-center py-3 pl-3 pr-2 rounded text-gray-50 hover:bg-gray-900" href="#">
                <span className="inline-block mr-4">
                </span>
                <span>Log Out</span>
              </a>
            </div>
          </div>
        </nav>
      </div >
      <div className="mx-auto lg:ml-80"></div>
    </div >
  )
}

export default SideBar