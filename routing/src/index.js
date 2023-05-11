import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutingWithReactRouter from './RoutingWithReactRouter';
import Nav1 from './Nav.js';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <App />

   <RoutingWithReactRouter></RoutingWithReactRouter>
    </>
);

