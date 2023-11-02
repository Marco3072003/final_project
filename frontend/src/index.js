import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import ErrorPage from "./routes/ErrorPage";
import Root from './routes/Root';
import DetailRoute from './routes/DetailRoute';
import './App.css';
import {useState} from 'react'
import { createBrowserRouter} from 'react-router-dom';


  

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Root />,
      errorElement:<ErrorPage />,
    },
    {
      path:'detail/:id',
      element: <DetailRoute />
    }
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

