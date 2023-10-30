import {Routes, Route } from 'react-router-dom';
import { Home, Menus, Contact, About } from '../Pages';

export const AllRoutes = () => {
  return (
    <>
     <Routes>
    <Route path="/"
      element={<Home />}/>
    <Route path="menus"
      element={<Menus />}/>
    <Route path="contact"
      element={<Contact />}/>
    <Route path="about"
      element={<About />}/>
  </Routes>
    </>
  );
}
