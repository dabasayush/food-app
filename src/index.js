import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import './css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './pages/About';
import Error from './pages/Error';
import ErrorElement from './pages/ErrorElement';

const appRouter = createBrowserRouter([
  { 
      path: "/",
      element: <App />,
      errorElement: <ErrorElement/>
  },
  {
    path: "/about",
    element: <About />
  },
  // {
  //   path: "*",
  //   element: <Error />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
