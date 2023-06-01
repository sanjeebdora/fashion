import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

//import { UserContext } from '../../contexts/user.context';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
// import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import Footer from '../../components/footer/footer.component';

const Navigation = () => {
  //const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop" className="link link--thebe">
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink
              as="span"
              className="link link--thebe"
              onClick={signOutUser}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth" className="link link--thebe">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      <Footer></Footer>
    </Fragment>
  );
};

export default Navigation;
