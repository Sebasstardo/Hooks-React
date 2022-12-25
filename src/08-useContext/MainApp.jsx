import React from 'react'
import { Link, Navigate, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import AboutPage from './AboutPage';
import UserProvider from './context/UserProvider';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Router from './Router';



const MainApp = () => {


    return (
        <UserProvider>
            <h1>Main App</h1>
            <Router />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="about" element={<AboutPage />}></Route>
                <Route path='/*' element={<Navigate to="/about" />}></Route>
            </Routes>
        </UserProvider>
    )
}

export default MainApp