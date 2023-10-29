import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx"
import Login from "./components/user/Login.jsx"
import Nav from "./components/structure/Nav.jsx"
import Register from "./components/user/Register.jsx"
import Account from "./components/user/Account.jsx"
import Fpass from "./components/Fpass.jsx"
import { useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { loadUser } from './actions/userActions';
import ProtectedRoute from './components/routes/ProtectedRoute';
function App() {
  const dispatch=useDispatch()
  const {isAuthenticated}=useSelector(state=>state.user)
  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])
  return (
    <Router>
        <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-password' element={<Fpass/>}/>
        <Route
          path="/account"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
