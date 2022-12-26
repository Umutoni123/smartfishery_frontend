import React from 'react'
import { useHistory } from "react-router-dom"

function Login() {
  const history = useHistory()
  return (
    <section className="flex items-center justify-center">
      <div className="relative w-2/3 overflow-hidden bg-white">
        <div className="flex flex-col items-center justify-center w-full p-8">
          <button onClick={() => history.push("/login")} class="flex items-center">
            <img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt="Smart Fishery Logo" />
            <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Smart Fishery</span>
          </button>
          <div className="flex flex-col justify-center h-full p-4 py-16 bg-blueGray-100">
            <form className="mx-auto md:max-w-lg">
              <label className="block mb-4">
                <p className="mb-2 font-semibold leading-normal text-gray-900">Email Address *</p>
                <input className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-1" type="text" placeholder="Enter email address" />
              </label>
              <label className="block mb-5">
                <p className="mb-2 font-semibold leading-normal text-gray-900">Password *</p>
                <input className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-2" type="password" placeholder="********" />
              </label>
              <div className="flex flex-wrap justify-between mb-4 -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center">
                    <input className="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                    <label className="ml-2 text-sm font-medium text-gray-900" for="default-checkbox">Remember Me</label>
                  </div>
                </div>
                <div className="w-auto p-2"><a className="text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">Forgot Password?</a></div>
              </div>
              <button onClick={() => history.push("/dashboard")} className="w-full py-4 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 mb-9 px-9 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700" type="button">Sign In</button>
              <p className="mb-5 text-sm font-medium text-center text-gray-500">Or continue with</p>
              <div className="flex flex-wrap justify-center -m-2">
                <div className="w-auto p-2">
                  <button className="flex items-center p-4 transition duration-200 ease-in-out bg-white border rounded-lg hover:bg-gray-50">
                    <span className="font-semibold leading-normal">Sign in with Google</span>
                  </button>
                </div>
                <div className="w-auto p-2">
                  <button className="flex items-center p-4 transition duration-200 ease-in-out bg-white border rounded-lg hover:bg-gray-50">
                    <span className="font-semibold leading-normal">Sign in with Facebook</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login