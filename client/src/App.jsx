import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import './App.css'

import { Login, Register, PageNotFound, Product, Edit } from "./pages";
import { Footer, Header, Searchbar } from "./components";
import { LoginContext } from "./contexts";

function App() {

  const [path, setPath] = useState("Login");
  const [isLogin, setIslogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    let firstchar = path.charAt(1);
    path = path.slice(2);
    setPath(firstchar.toUpperCase() + path);
  }, [location.pathname]);

  return (
    <>
      <LoginContext.Provider value={{
        isLogin,
        setIslogin
      }} >
        <Header />
        <Searchbar />
        <div className="max-w-screen my-5 flex items-center justify-center gap-1">
          <p className="font-bold">Home {'> '} </p> <p className="text-red-400 font-bold">{" " + path}</p>
        </div>
        <div className="mb-10 px-24">
          
            {!isLogin ? (
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/edit" element={<Edit />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            )}

        </div>
      </LoginContext.Provider>
      <Footer />
    </>
  )
}

export default App
