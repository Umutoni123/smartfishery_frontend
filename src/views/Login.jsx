import React from 'react'
import { useHistory } from "react-router-dom"
import toast from 'react-hot-toast';
import AppServices from "../services";
import {
  loadUser,
  selectIsLoggedIn,
} from '../store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

function Login() {
  const history = useHistory();
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("logged in")
      history.push("/fishponds");
    } else {
      dispatch(loadUser());
    }
  }, [isLoggedIn])

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();

    if (submitted) return;
    setSubmitted(true);

    toast.promise(
      AppServices.login(credentials),
      {
        loading: 'Logging in ...',
        success: (response) => {
          if (response.data.authorisation) { // check if the response has the token
            localStorage.setItem('token', response.data.authorisation.token);
            dispatch(loadUser())
          }
          setSubmitted(false);
          return "Logged in successfully";
        },
        error: (error) => {
          console.log(error)
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setSubmitted(false);
          return message === 'Request failed with status code 400' ? 'Incorrect Login credentials' : message;
        },
      }
    );
  } 

  return (
    <section className="flex items-center justify-center">
      <div className="relative w-2/3 overflow-hidden bg-white">
        <div className="flex flex-col items-center justify-center w-full p-8">
          <button onClick={() => history.push("/")} className="flex items-center">
            <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Smart Fishery Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Smart Fishery</span>
          </button>
          <div className="flex flex-col justify-center h-full p-4 py-16 bg-blueGray-100">
            <form className="mx-auto md:max-w-lg" onSubmit={
              (e) => {
                e.preventDefault();
                handleLogin(e);
              }
            }>
              <label className="block mb-4">
                <p className="mb-2 font-semibold leading-normal text-gray-900">Email Address *</p>
                <input className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-1" type="text" defaultValue={""} onChange={(e)=>{
                  setCredentials({...credentials, email: e.target.value})
                }} required placeholder="Enter email address" />
              </label>
              <label className="block mb-5">
                <p className="mb-2 font-semibold leading-normal text-gray-900">Password *</p>
                <input className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-2" type="password" defaultValue={""} onChange={(e)=>{
                  setCredentials({...credentials, password: e.target.value})
                }} required placeholder="********" />
              </label>
              <div className="flex flex-wrap justify-between mb-4 -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center">
                    <input className="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                    <label className="ml-2 text-sm font-medium text-gray-900" htmlFor="default-checkbox">Remember Me</label>
                  </div>
                </div>
                <div className="w-auto p-2"><a className="text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">Forgot Password?</a></div>
              </div>
              <button className="w-full py-4 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 mb-9 px-9 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700" type="submit">Sign In</button>
              <p className="mb-5 invisible text-sm font-medium text-center text-gray-500">Or continue with</p>
              <div className="flex flex-wrap justify-center invisible -m-2">
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