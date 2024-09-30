import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import 'swiper/css';
import Home from './Componentes/Home/index.jsx'
import FormLogin from './Componentes/FormLogin/index.jsx'
import FormCadastro from './Componentes/FormCadastro/index.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: "form-login", element: <FormLogin/>},
      {path: "form-cadastro", element: <FormCadastro/>}
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)