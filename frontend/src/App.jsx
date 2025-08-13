import { useState } from 'react'
import './App.css'
import { Button, HStack } from "@chakra-ui/react"
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Route path="/" component={HomePage} exact/>
       <Route path='/chats' component={ChatPage}/>
       </div>
    </>
  )
}

export default App
