import { ThemeProvider } from '@material-ui/core';
import React from 'react'
import Home from './pages/Home'
import createTheme from './theme'
import {useSettings} from './context/SettingsContext'
import SignIn from './pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './mock'
import GuestRoutes from './routes/guestRoutes'
import Auth from './components/Auth/index'
import SingUp from './pages/SignUp/index'



function App() {
  const {settings} = useSettings()
  return (
    <div>
      <ThemeProvider theme={createTheme(settings)}>
        <BrowserRouter>
        <Auth>
          <Routes>
          <GuestRoutes path="/sign-in" element={<SignIn/>}/>
          <GuestRoutes path="/sign-up" element={<SingUp/>}/>
            <Route path="//*"  element={<Home/>}/>
          </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
      
      
    </div>
    
  );
}

export default App;
