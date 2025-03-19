
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserConext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
