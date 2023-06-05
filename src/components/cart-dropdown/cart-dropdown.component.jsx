import './cart-dropdown.styles.jsx';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItes,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const element = ref.current;
      if (
        (event.target.className.baseVal === 'sc-dicizt kRBiCP shopping-icon' &&
          isCartOpen) ||
        event.target.className === element.className ||
        (event.target &&
          event.target.parentElement &&
          event.target.parentElement.className === 'cart-item-container') ||
        event.target.className === 'item-details' ||
        event.target.className === 'name' ||
        event.target.className === 'price'
      ) {
        dispatch(setIsCartOpen(true));
      } else {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartDropdownContainer ref={ref}>
      <CartItes>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItes>
      <Button onClick={goToCheckoutHandler}>ADD TO CART</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
