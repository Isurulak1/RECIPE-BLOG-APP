import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx';
import CategoryPage from './pages/categoy/CategoryPage.jsx';
import Search from './pages/Search.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage/>
      },
      {
        path: "/search",
        element: <Search />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
