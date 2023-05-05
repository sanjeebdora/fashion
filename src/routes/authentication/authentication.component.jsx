import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import Title from '../../components/page-title/page-title.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Title pageTitle="Authentication" />
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
