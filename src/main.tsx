import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './assets/tailwind.css'
import AppFooter from './components/AppFooter';
import Dashboard from './routes/Dashboard';
import Settings from './routes/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/settings",
    element: <Settings/>, // = lazy loading
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div className="max-w-screen-xl mx-auto py-8">
    <AppFooter/>
    </div>
  </React.StrictMode>,
)
