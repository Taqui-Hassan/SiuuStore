import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import './components/index.js'
import Jerseys from './pages/Jerseys.jsx'
import Boots from './pages/Boots.jsx'
import Sale from './pages/Sale.jsx'
import Training from './pages/Training.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import ShoppingPage from './components/ShoppingPage/ShoppingPage.jsx'
const router = createBrowserRouter([

  {
    path: '/',
    element: <App />
  }
  , {
    path: '/jerseys',
    element: <Jerseys />
  }
  , {
    path: '/boots',
    element: <Boots />
  }
  , {
    path: 'sale',
    element: <Sale />
  }
  , {
    path: 'training',
    element: <Training />
  },
  {
    path: 'ShoppingPage',
    element: <ShoppingPage />
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render
  (

    <React.StrictMode>
      <Provider store={store}>

        <RouterProvider router={router} />

      </Provider>
    </React.StrictMode>,

  )