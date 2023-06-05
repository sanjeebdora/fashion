import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { useEffect, useRef } from 'react';
import { setIsCartOpen } from '../../store/cart/cart.action';
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
//import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  //const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
