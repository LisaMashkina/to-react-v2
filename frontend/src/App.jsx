import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import {buttons_navbar, buttons_navbar_fp, buttons_navbar_pp} from "./data.js"
import Main from './components/main/Main.jsx'
import Home from "./Home.jsx";

export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/main" element={<Main></Main>}></Route> */}
        {/* <Route path="/profile" element={<Header buttons_navbar= {buttons_navbar_pp} ></Header>}></Route> */}
      </Routes>


    </>
  )
}
