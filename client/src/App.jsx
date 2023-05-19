import { useState, useEffect } from "react";
import {Routes, Route, Link, useLocation} from "react-router-dom";
import './App.css'

import { Login, Register, PageNotFound } from "./pages";
import { Footer, Header, Searchbar } from "./components";

function App() {

  const [path, setPath] = useState("Login");
  const location = useLocation();

  useEffect(()=>{
    let path = location.pathname;
    let firstchar = path.charAt(1);
    path = path.slice(2);
    setPath(firstchar.toUpperCase() + path);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Searchbar />
      <div className="max-w-screen my-5 flex items-center justify-center gap-1">
        <p className="font-bold">Home { '> ' } </p> <p className="text-red-400 font-bold">{" " + path}</p>
      </div>
      <div className="mb-10 px-24">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
