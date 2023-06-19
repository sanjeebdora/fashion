// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  // const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);

  // const clearItemHandler = () => clearItemFromCart(cartItem);
  // const addItemHandler = () => addItemToCart(cartItem);
  // const removeItemHandler = () => removeItemFromCart(cartItem);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <tr className="checkout-item-container">
      <td className="image-container">
        {/* <img src={imageUrl} alt={`${name}`} loading="lazy" /> */}
        <LazyLoadImage
          alt={`${name}`}
          src={imageUrl} // use normal <img> attributes as props
          effect="blur"
        />
      </td>
      <td className="name"> {name} </td>
      <td className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </td>
      <td className="price"> {price}</td>
      <td className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </td>
    </tr>
  );
};

export default CheckoutItem;
