import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import { ToastContainer } from "react-toastify";
import Home from "./component/Home";
import Music from "./component/Music";
import Contact from "./component/Contact";
import Pnf from "./component/Pnf";

function App(props){
  return(
    <BrowserRouter>
       <Menu/>
       <ToastContainer autoClose={4000} position={'top-right'} />
       <Routes>
           <Route path={`/`} element={<Home/>} />
           <Route path={`/music/artist/:artistId`} element={<Music/>} />
           <Route path={`/contact`} element={<Contact/>} />
           <Route path={`/*`} element={<Pnf/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App