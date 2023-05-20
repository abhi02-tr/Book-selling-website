import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        
        if(firstname == "" || lastname == "" || password == "" || email == "" || confirmPassword == "") {
            return toast("Please fill all information..", {
                type: "warning",
            });
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            return toast("Invalid Email adderess", {
                type: "warning",
            });
        }
        else if(password !== confirmPassword) {
            return toast("Password and Confirm Password are not equal.", {
                type: "warning",
            });
        }
        else {
            toast("Registration Completed", {
                position: "top-center",
                type: "success"
            })
            // setTimeout(()=>{
            //     navigate("/login");
            // }, 5000);
            
        }

    }

    return (
        <div className="flex flex-col">
            <div className="font-bold flex justify-center text-4xl font-roboto">
                Create An Account
            </div>
            <div className="mt-4">
                <div className="">
                    <p className="font-bold text-lg mb-2">Personal Information</p>
                    <div className="border-b-2 border-gray-200 mb-2"></div>
                    <p className="text-gray-400 font-roboto font-bold text-sm">Please Enter this following Information for creating Account</p>
                </div>

                <div className="max-w-screen flex mt-2 gap-4 font-roboto font-bold">
                    <div className="w-1/2 flex flex-col gap-1">
                        <label htmlFor="firstname">Firstname <span>*</span> </label>
                        <input type="text" className="w-full border-black border rounded-md px-3 py-1" id="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                    </div>
                    <div className="w-1/2 flex flex-col gap-1">
                        <label htmlFor="lastname">Lastname <span>*</span></label>
                        <input type="text" className="w-full border-black border rounded-md px-3 py-1" id="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                    </div>
                </div>

                <div className="flex flex-col gap-1 mt-4 font-roboto font-bold">
                    <label htmlFor="email">Email <sapan>*</sapan></label>
                    <input type="email" className="border border-black rounded-md px-3 py-1" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>

                <div className="mt-8 font-robotto font-bold">
                    <div className="flex flex-col gap-2">
                        <p className="text-lg">Login Information</p>
                        <div className="border-b-2 border-gray-200 mb-2"></div>
                    </div>
                    <div className="max-w-screen flex mt-2 gap-4 font-roboto font-bold">
                        <div className="w-1/2 flex flex-col gap-1">
                            <label htmlFor="password">Password <span>*</span> </label>
                            <input type="password" className="w-full border-black border rounded-md px-3 py-1" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className="w-1/2 flex flex-col gap-1">
                            <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                            <input type="password" className="w-full border-black border rounded-md px-3 py-1" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={handleRegister}>Register</button>
                    </div>
                    <ToastContainer 
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
                </div>
            </div>
        </div>
    );
}