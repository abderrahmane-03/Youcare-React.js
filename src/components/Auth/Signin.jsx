import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const data = await response.json();
            if (data && data.authorisation && data.authorisation.token) {
                localStorage.setItem('token', data.authorisation.token);

                if (data && data.user && data.user.role) {
                    switch (data.user.role) {
                        case 'organizer':
                            navigate('/annonces');
                            break;
                        case 'volunteer':
                            navigate('/AllAnnounces');
                            break;
                        default:
                            console.log("Role not recognized:", data.user.role);
                            navigate('/defaultRedirectPage');
                            break;
                    }
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[904px] lg:py-0">
                    <div className="py-6 flex flex-col justify-center sm:py-12">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                           
                            <div className="relative w-[500px] px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                <div className="max-w-md mx-auto">
                                    <div>
                                        <h1 className="text-2xl font-semibold text-center">YouCare</h1>
                                    </div>
                                    <form onSubmit={submit}>
                                        <div className="divide-y divide-violet-200">
                                            <div className="py-8 text-base leading-6 space-y-4 text-violet-700 sm:text-lg sm:leading-7">
                                                <div className="relative">
                                                    <input onChange={e => setEmail(e.target.value)}
                                                        autoComplete="off" type="text"
                                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-violet-300 text-violet-900 focus:outline-none focus:borer-rose-600"
                                                        placeholder="Email address" />
                                                    <label
                                                        className="absolute left-0 -top-3.5 text-violet-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-violet-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-violet-600 peer-focus:text-sm">Email
                                                        Address</label>
                                                </div>
                                                <div className="relative">
                                                    <input onChange={e => setPassword(e.target.value)}
                                                        autoComplete="off" type="password"
                                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-violet-300 text-violet-900 focus:outline-none focus:borer-rose-600"
                                                        placeholder="Password" />
                                                    <label
                                                        className="absolute left-0 -top-3.5 text-violet-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-violet-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-violet-600 peer-focus:text-sm">Password</label>
                                                </div>
                                                <div className="relative">
                                                    <button type="submit"
                                                        className="bg-black text-white hover:bg-violet-900 duration-300 rounded-md px-8 py-1">Submit
                                                    </button>
                                                </div>
                                                {error && <div className="text-red-500">{error}</div>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signin;
