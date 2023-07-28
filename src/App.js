import React from 'react';
import {  BrowserRouter ,Routes, Route } from 'react-router-dom';



import User from './User';
import Home from './Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user"element={<User/>} />
        <Route path="/user/:id"element={<User/>} />
        
     </Routes>
     </BrowserRouter>
    
  );
};

export default App;