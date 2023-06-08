import './cart-item.styles.scss';
import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CartItem = memo(({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      {/* <img src={imageUrl} alt={`${name}`} loading="lazy" /> */}
      <LazyLoadImage
        alt={`${name}`}
        src={imageUrl} // use normal <img> attributes as props
        height={`auto`}
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
});

export default CartItem;
