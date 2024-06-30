import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'

function App() {
  return (
    <div>
      <Greeter person="Naruto" from="Jiraya"/>
      <Greeter person="Sakura" from="Tsunade"/>
      <Greeter person="Sasuke" from="Orochimaru"/>
    </div>
  );
}

export default App
