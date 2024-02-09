import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from ".././contexts/AuthContext";
import { setSessionStorageData } from ".././Storage/Sessionstorage";
import axios from "axios";


export default function Login() {
    const { setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

        function handleLogin(event) {
            event.preventDefault();
            axios.post("http://localhost:8000/user/signin", { email, password})
            .then((response) => {
                if (response.status === 200) {
                  setLoggedIn(true);
                  setSessionStorageData("_tk", response.data.token);
                  navigate("/dashboard");
                }
            }
            )
                .catch((err) => {
                    console.log(err);
                    alert("Invalid email or password. Please try again.");
                });
        }
        
        return (
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Logo
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    id="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" 
                            >
                               Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Create a new account{" "}
                        <span>
                          <Link to='/signup'>
                          <a className="text-purple-600 hover:underline">
                                SignUp
                            </a>
                          </Link>
                        </span>
                    </div>
                  </div>
            </div>
    );
}