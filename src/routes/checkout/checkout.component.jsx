// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <h1 className="title">
        Fashion Address <span>Checkout</span>
      </h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: Rs. {cartTotal}</div>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
