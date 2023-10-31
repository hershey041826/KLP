import {Routes, Route } from 'react-router-dom';
import { Home, Recipe, Blog, About } from '../Pages';

export const AllRoutes = () => {
  return (
    <>
     <Routes>
    <Route path="/"
      element={<Home />}/>
    <Route path="Recipe"
      element={<Recipe />}/>
    <Route path="Blog"
      element={<Blog />}/>
    <Route path="About"
      element={<About />}/>
  </Routes>
    </>
  );
};
