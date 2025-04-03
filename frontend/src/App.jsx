import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'
import Header from './components/header/header.jsx'
import {buttons_navbar, buttons_navbar_fp, buttons_navbar_pp} from "./data.js"
import Main from './components/main/Main.jsx'

export default function App() {
  return (
    <>
      <Header buttons_navbar= {buttons_navbar_fp} ></Header>
      <Main></Main>
    </>
  )
}
