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
  <React.StrictMode >
    <div className="w-6/12 mx-auto py-8">
    <RouterProvider router={router} />
    <AppFooter/>
    </div>
  </React.StrictMode>,
)
