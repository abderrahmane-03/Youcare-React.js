import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const OrganizerRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/api/register/organizer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        navigate('/signin');
    }

    return (
        <div>
            <section className="bg-red-900">
                <div className="flex justify-center h-[904px]">
                    <div
                        className="flex mt-44 bg-red-800 h-[500px] items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl  font-semibold tracking-wider text-white capitalize">
                                SIGN UP AS ORGANIZER
                            </h1>
                            <div>
                                <div className=" flex justify-end mt-3 md:flex md:items-center md:-mx-2">
                                    <Link to="/VolunteerRegister" className="flex justify-center w-full px-6 py-3 mt-4 text-white border bg-black  rounded-lg md:mt-0 md:w-auto md:mx-2 hover:bg-white hover:text-black hover:border-black duration-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        <span className="mx-2">As Volunteer</span>
                                    </Link>
                                </div>
                            </div>

                            <div  className=" w-full">
                                <form onSubmit={submit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">
                                    <div>
                                        <label className="block mb-2 text-sm text-red-100 ">First Name</label>
                                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-red-700 placeholder-red-400 bg-white border border-red-200 rounded-lg dark:placeholder-red-300 dark:bg-red-100 dark:text-red-700dark:border-red-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                   
                                    <div>
                                        <label className="block mb-2 text-sm text-red-100">Email Address</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-red-700 placeholder-red-400 bg-white border border-red-200 rounded-lg dark:placeholder-red-300 dark:bg-red-100 dark:text-red-700dark:border-red-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-red-100">Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" className="block w-full px-5 py-3 mt-2 text-red-700 placeholder-red-400 bg-white border border-red-200 rounded-lg dark:placeholder-red-300 dark:bg-red-100 dark:text-red-700dark:border-red-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    
                                    <button type="submit"
                                            className="flex items-center justify-between w-full px-6 h-12 mt-7 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-red-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        <span>Sign Up </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrganizerRegister;