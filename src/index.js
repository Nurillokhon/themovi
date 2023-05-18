import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import  More from './Componets/More'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>  }/>
        <Route path='/more/:id' element={<More/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


