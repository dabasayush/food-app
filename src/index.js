import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// css
import './App.css';
import './css/bootstrap.min.css';
// slick slider 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// pages
import About from './pages/About'
import ErrorElement from './pages/ErrorElement'
import Learn from './pages/Learn';
import Error from './pages/Error'

// components
import Header from "./components/Header";
import RestaurantMenu from './pages/RestaurantMenu';
import MainLayout from './layout/MainLayout';

const App = () => {
  return(
    <div className="app">
        <Header />
        <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <MainLayout />
        },
        {
            path: "/about",
            element: <About />
        },
        {
          path: "learn",
          element: <Learn />
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
        },
        // {
        //   path: "*",
        //   element: <Error />
        // }
    ],
    errorElement: <ErrorElement/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);