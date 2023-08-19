import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import SignIn from './pages/SignIn.jsx';
import Registration from './pages/Registration.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ({ params }) => fetch('https://fakestoreapi.com/products')
      },
      // {
      //   path: "/signIn",
      //   element: <SignIn />,
      // },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],

  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
  // </React.StrictMode>,
)
