import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import {buttons_navbar, buttons_navbar_fp, buttons_navbar_pp} from "./data.js"
import Main from './components/main/Main.jsx'

export default function Home() {
  return (
    <>
      
      <Header buttons_navbar= {buttons_navbar_fp} ></Header>
      <Main></Main>

    </>
  )
}
