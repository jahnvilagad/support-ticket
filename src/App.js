import React from 'react';
import './App.css';
import Sidenav from './Pages/Sidenav';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import Unassigned from './Components/Unassigned';
import Mine from './Components/Mine';
import Assigned from './Components/Assigned';
import Closed from './Components/Closed';
import Drafts from './Components/Drafts';
 


export default function App() {
 return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Unassigned />}></Route>
      <Route path='/mine' exact element={<Mine />}></Route>
      <Route path='/assigned' exact element={<Assigned />}></Route>
      <Route path='/closed' exact element={<Closed />}></Route>
      <Route path='/drafts' exact element={<Drafts />}></Route>
    </Routes>
  </BrowserRouter>
 </>
}
