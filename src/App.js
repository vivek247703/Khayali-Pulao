import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { About } from './components/About';
import Contact from './components/Contact';
import {Error} from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { RestaurantMenu } from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import { Cart } from './components/Cart';
import { Login } from './components/Login';


// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)


// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer



const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
      
   
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);