import { useState } from 'react'
import './App.css'
import Button from './components/buttons/Button.jsx'
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
