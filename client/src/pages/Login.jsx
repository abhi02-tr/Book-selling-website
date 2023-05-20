import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        return navigate("/register");
    };

    const handleLogin = () => {
        if(email == "" || password == "") {
            return toast("Please fill all information.", {
                type: "warning"
            });
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return toast("Please enter valid email.", {
                type: "warning"
            })
        }
        else {
            toast("Login Success", {
                type: "success"
            })
        }
    };
    return (
        <>
            <ToastContainer position="top-left"/>
            <div className="text-center m-auto text-4xl font-bold font-roboto">
                Login or Create An Account
                <div className="border border-b-2 w-1/4 m-auto mt-3 border-black"></div>
            </div>
            <div className="flex mt-4 font-roboto gap-8">
                <div className="flex flex-col w-1/2 pr-10">
                    <p className="font-bold text-xl">New Customer</p>
                    <div className="border border-b-2 my-3"></div>
                    <p className="text-gray-500 font-bold text-md">Registration is free and easy.</p>
                    <ul className="mt-3 list-disc pl-4">
                        <li>Faster Checkout.</li>
                        <li>Save multiple shopping addresses.</li>
                        <li>View and track user orders.</li>
                    </ul>
                    <div className="mt-28">
                        <button className="bg-red-500 px-3 py-2 rounded hover:bg-red-600 text-white"
                        onClick={handleRegister}
                        >Create An Account</button>
                    </div>
                    
                </div>
                <div className="flex flex-col w-1/2 font-roboto">
                    <p className="font-bold text-xl">Registered Customer</p>
                    <div className="border border-b-2 my-3"></div>
                    <p className="text-gray-500 font-bold text-md">If you have an account with us. Please Log In.</p>
                    <div className="flex flex-col mt-3 gap-3">
                        <div className="flex flex-col font-bold gap-1">
                            <label htmlFor="email" className="text-lg">Email <span>*</span></label>
                            <input type="email" className="border border-black rounded w-72 px-2 py-1" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="flex flex-col gap-1 font-bold">
                            <label htmlFor="password" className="text-lg">Password <span>*</span></label>
                            <input type="password" className="border border-black rounded w-72 px-2 py-1" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className="mt-7">
                            <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                            onClick={handleLogin}
                            >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login