import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import CustomContainer from 'shared/components/Container/Container';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(login(data));
  };

  return (
    <main>
      <CustomContainer>
        <LoginForm onFormSubmit={handleSubmit} />
      </CustomContainer>
    </main>
  );
};

export default LoginPage;
