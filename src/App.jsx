import { useState } from 'react'
import Header from './components/Headers'
import Foodoption from './components/Foodoption'
import Groceryoption from './components/Groceryoption'
import './App.css'
import "./index.css" 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Foodoption></Foodoption>
    <Groceryoption></Groceryoption>
    
    </>
  )
}

export default App
