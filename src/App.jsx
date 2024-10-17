import React from 'react'
import myState from './components/context/data/myState'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import NoPage from './pages/noPage/NoPage';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Profile from './pages/profile/Profile';
import AddNotes from './pages/addNotes/AddNotes';
import UpdateNotes from './pages/updateNotes/UpdateNotes';

function App() {
  return (
    <myState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/*' element={<NoPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/addnote' element={<AddNotes/>} />
          <Route path='/updatenote' element={<UpdateNotes/>} />        
        </Routes>
      </Router>
    </myState>
  )
}

export default App
