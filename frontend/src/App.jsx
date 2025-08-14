import { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
       <Route path="/" component={HomePage} exact/>
       <Route path='/chats' component={ChatPage}/>
       </div>
    </>
  )
}

export default App
