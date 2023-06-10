import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css';

import App from './App';

import HomePage from './pages/Homepage';
import ProductPage from './pages/ProductPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
//ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    //<App />
    //<RouterProvider router={router} />
 // </React.StrictMode>
//);

//ReactDOM.render(
  //<React.StrictMode>
     //<App />
  //<React.StrictMode>
  //document.getElementById("app")
//);
ReactDOM.render(
  <StrictMode>
    <App /> 
  </StrictMode>,
  document.getElementById('root')
);


//root.render(
//<StrictMode>
   // <App />
    //<RouterProvider router={router} />
  //</StrictMode>
//);
