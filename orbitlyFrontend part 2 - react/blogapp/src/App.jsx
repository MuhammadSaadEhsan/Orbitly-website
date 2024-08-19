// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import viteLogo from '/vite.svg'
// import './App.css'
// import Base from './components/base';
// import { BrowserRouter,Route,Routes} from 'react-router-dom';
// import Home from './pages/home';
// import Login from './pages/login';
// import Signup from './pages/singup';
// import About from './pages/About';
// import Services from './pages/Services';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UserDashboard from './pages/userRoutes/UserDashboard';
// import PrivateRoute from './components/PrivateRoute';
// import ProfileInfo from './pages/userRoutes/ProfileInfo';
// import PostPage from './pages/PostPage';

// function App() {
//   return (
//     <BrowserRouter>
//     <ToastContainer/>
//       <Routes>
//         {/* <Route path='home' element = {<Home/>} /> */}
//         <Route path='/' element = {<Home/>} />
//         <Route path='about' element = {<About/>} />
//         <Route path='signup' element = {<Signup/>} />
//         <Route path='login' element = {<Login/>} />
//         <Route path='services' element = {<Services/>} />
//         <Route path='user' element = {<PrivateRoute/>} />
//         <Route path='/post/:postId' element = {<PostPage/>} >
        
//         <Route path='dashboard' element = {<UserDashboard/>} />
//         <Route path='profileinfo' element = {<ProfileInfo/>} />
        
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import { useState } from 'react';
import reactLogo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import viteLogo from '/vite.svg';
import './App.css';
import Base from './components/base';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/singup';
import About from './pages/About';
import Services from './pages/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './pages/userRoutes/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import ProfileInfo from './pages/userRoutes/ProfileInfo';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post/:postId" element={<PostPage />} />
        
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profileinfo" element={<ProfileInfo />} />
        </Route>
        
        {/* Redirect any undefined routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
