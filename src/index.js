import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
// import Counter from './componates/counter';




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement:<h1>error ......</h1>
//   },

// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
  

      <App />

    
    
    </React.StrictMode>
    );
    


reportWebVitals();
