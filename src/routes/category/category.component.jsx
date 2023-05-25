import './category.styles.scss';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
  const { category } = useParams();
  //const categoriesMap = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[Category]);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
