import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { setCategories } from '../../store/categories/categories.action';

import CategoriesPreviw from '../categories-preview/categories-preview.componet';
import Category from '../category/category.component';
import { fetchCategoriesStartAsync } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoriesArray = await getCategoriesAndDocuments('categories');
    //   dispatch(setCategories(categoriesArray));
    // };

    // getCategoriesMap();
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreviw />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
