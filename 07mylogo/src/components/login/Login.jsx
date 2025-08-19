import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (<>

    
<h1 className="ml-[750px] mt-[50px] text-[25px] font-bold">Login</h1> 
        <div className="relative flex ml-[650px] min-h-[600px] bg-white mt-[20px]">
            <div className="relative flex justify-center">
                <div className=" overflow-hidden">
                    <div className="grid grid-cols-4 md:grid-cols-1">
                        <div className="p-8  bg-gray-100 sm:rounded-lg">
               
            <form className="p-1 flex flex-col justify-center">
                        

                            <div className="flex flex-col mt-2 ">
                                <label for="email" className="hidden">
                                   Username
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Password
                                </label>
                                <input
                                    type="Password"
                                    name="tel"
                                    id="tel"
                                    placeholder="Password"
                                    required
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-62 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Login
                            </button>
                              <br />
                            <p>Don't have an account? <Link to="http://localhost:5173/signup"  className='text-orange-600'>sign up</Link></p> 
                        </form>
                       

             </div>
         </div>
     </div>
     </div>
   </div>
     
    
     </>
         
     
  )
}

export default Login
