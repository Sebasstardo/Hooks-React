import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    NavLink
} from "react-router-dom";

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MainApp from './MainApp';

const Router = () => {

    return <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={({isActive})=> `nav-link ${isActive ? 'active': ''}`} to="/">
                            home
                        </NavLink>
                        <NavLink className={({isActive})=> `nav-link ${isActive ? 'active': ''}`} to="about">
                            About
                        </NavLink>                
                        <NavLink className={({isActive})=> `nav-link ${isActive ? 'active': ''}`} to="login">
                            login
                        </NavLink>                
                    </div>
                </div>
            </div>
        </nav>


    </>;
}

export default Router