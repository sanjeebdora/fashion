import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import './shop.styles.scss';
import CategoriesPreviw from '../categories-preview/categories-preview.componet';
import Category from '../category/category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviw />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
