import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Headers/Header'
import Home from './Components/Home/Home'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Box style={{ marginTop: 56 }}>
    <Home/>
   </Box>
   
   </>
  )
}

export default App
