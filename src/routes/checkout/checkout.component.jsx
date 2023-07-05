// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import { useSelector } from 'react-redux';
import { memo } from 'react';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../utils/stripe/stripe.utils';
import { Link } from 'react-router-dom';

const Checkout = memo(() => {
  // const { cartItems, cartTotal } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-container">
        <h1 className="title">
          Fashion Address <span>Checkout</span>
        </h1>
        {cartItems.length ? (
          <table className="table-auto">
            <thead>
              <tr className="checkout-header">
                <th className="header-block">
                  <span>Product</span>
                </th>
                <th className="header-block">
                  <span>Description</span>
                </th>
                <th className="header-block">
                  <span>Quantity</span>
                </th>
                <th className="header-block">
                  <span>Price</span>
                </th>
                <th className="header-block">
                  <span>Remove</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </tbody>
          </table>
        ) : (
          <h3>
            Please <Link to="/">Continue Shoping</Link> &nbsp; Add Products To
            cart to complete checkout Process
          </h3>
        )}
        {cartItems.length ? (
          <div className="total">TOTAL: Rs. {cartTotal}</div>
        ) : null}
        {cartTotal ? <PaymentForm /> : null}
      </div>
    </Elements>
  );
});

export default Checkout;
