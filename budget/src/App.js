import logo from './logo.svg';
import './App.css';
import React ,{ useEffect } from 'react';
import Main from './pages/main';
import { useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign_up from './pages/sign_up/sign_up';
import Log_in from './pages/login_page/login_page';
import About_page from './pages/About_page/about_page';
import Blog from './pages/Blog/blog';
import Resource from './pages/Resource/resource';
import Features from "./pages/Features/features";
import User from './pages/User_view_page/user_view';
import Details from './pages/Details/details';
import Transactions from './pages/Transactions/transactions';
import Expenses from './pages/Expenses/expenses';
import Income from './pages/Incomes/incomes';
function App() {
  return (
    <React.Fragment>
     <BrowserRouter>
         
         <Routes> 
         <Route exact path="/" element={<Main/>} />
        <Route exact path="/Resource" element={<Resource />} />
        <Route exact path="/Expenses" element={<Expenses />} />
        <Route exact path="/Incomes" element={<Income />} />
        <Route exact path="/Transactions" element={<Transactions />} />
        <Route exact path="/Details" element={<Details />} />
        <Route exact path="/Sign-up" element={<Sign_up />} />
        <Route exact path="/User" element={<User />} />
        <Route exact path="/Features" element={<Features />} />
        <Route exact path="/Research" element={<Blog />} />
        <Route exact path="/Log-in" element={<Log_in />} />
        <Route exact path="/About" element={<About_page />} />
         </Routes>
         </BrowserRouter>


    </React.Fragment>
    
  );
}

export default App;
