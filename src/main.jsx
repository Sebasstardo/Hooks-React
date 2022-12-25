import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './07-useReducer/intro-reducer'
import TodoApp from './07-useReducer/TodoApp'
import MainApp from './08-useContext/MainApp'
import Router from './08-useContext/Router'
import { BrowserRouter, RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <MainApp/>
        </React.StrictMode>,
    </BrowserRouter>


)
