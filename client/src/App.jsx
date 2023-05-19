import {Routes, Route, Link} from "react-router-dom";
import './App.css'

import { Login, Register, PageNotFound } from "./pages";
import { Footer, Header, Searchbar } from "./components";

function App() {

  return (
    <>
      <Header />
      <Searchbar />
      <div className="my-10 px-24">
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
