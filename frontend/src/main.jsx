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
import SingleProducts from './pages/products/SingleProducts.jsx';
import Recipes from './pages/products/Recipes.jsx';
import Resources from './pages/resources/Resources.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';



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
      },{
        path: "/items/:id",
        element: <SingleProducts />,
        loader: ({params}) => fetch(`http://localhost:5000/api/items/${params.id}`)
      },{
        path: "/recipes",
        element: <Recipes />
      },{
        path: "/resources",
        element: <Resources />
      },{
        path: "/about",  
        element: <About />
      },{
        path: "/contact",
        element: <Contact />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
