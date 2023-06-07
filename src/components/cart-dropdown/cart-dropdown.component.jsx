import './cart-dropdown.styles.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

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

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
  }, []);
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
