import {BsFillCartFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register");
    }

    const handleCart = () => {
        navigate("/cart");
    };


    return (
        <div className="max-w-screen flex h-14 justify-between items-center bg-red-400 text-white mx-auto px-24">
            <div className="">Logo</div>
            <div className="flex gap-4">
                <button className="btn bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700"
                    onClick={handleLogin}
                >Login</button>

                <button className="btn bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700"
                    onClick={handleRegister}
                >Register</button>

                <div className="bg-white border-blue-600 text-red-500 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer"
                    onClick={handleCart}
                >
                    <BsFillCartFill />
                    <p className="text-600">Cart</p>
                </div>
            </div>
        </div>
    );
}