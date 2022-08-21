import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import Chatroom from "./Components/Pages/Chatroom";
import RequireAuth from "./Components/Shared/RequiredAuth";
import Profile from "./Components/Profile/Profile";
// import toast, { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/room"
          element={
            <RequireAuth>
              <Chatroom></Chatroom>
            </RequireAuth>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<SignIn></SignIn>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
      {/* <Toaster position="top-right" reverseOrder={true} /> */}
      <ToastContainer limit={5} />
    </div>
  );
}

export default App;
