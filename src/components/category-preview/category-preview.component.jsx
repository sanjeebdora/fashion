import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2 className="title">
      <Link className="title link link--thebe" to={title}>
        <span> {title.toUpperCase()}</span>
      </Link>
    </h2>
    <div className="preview box">
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
