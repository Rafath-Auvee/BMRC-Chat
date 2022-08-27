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
import ManageNews from "./Components/News/ManageNews";
import NewsCard from "./Components/News/NewsCard";
import Newsform from "./Components/News/Newsform";
import NewsDescription from "./Components/News/NewsDescription";
import MemberReg from "./Components/DataCollection/MemberReg";
import GeneralMemberReg from "./Components/DataCollection/GeneralMemberReg";


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
        <Route path="/managenews" element={<ManageNews/>}/>
        <Route path='/news' element={<NewsCard/>}/>
        <Route path="/addnews" element={<Newsform/>}/>
        <Route path="/data" element={<MemberReg/>}/>
        <Route path="/gmdata" element={<GeneralMemberReg/>}/>

        <Route
              path="/newsdescription/:id"
              element={<NewsDescription />}
            />
      </Routes>
      {/* <Toaster position="top-right" reverseOrder={true} /> */}
      <ToastContainer limit={5} />
    </div>
  );
}

export default App;
