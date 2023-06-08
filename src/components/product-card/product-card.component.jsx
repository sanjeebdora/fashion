import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './product-card.styles.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);

  // const addProductToCart = () => addItemToCart(product);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container card">
      <div className="imgBx">
        {/* <img src={imageUrl} alt={`${name}`} loading="lazy" /> */}
        <LazyLoadImage
          alt={`${name}`}
          height={`100%`}
          src={imageUrl} // use normal <img> attributes as props
          width={`100%`}
          effect="blur"
        />
      </div>
      <div className="footer details">
        <h2 className="name">{name}</h2>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
