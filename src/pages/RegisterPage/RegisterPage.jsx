import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operation';
import CustomContainer from 'shared/components/Container/Container';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <CustomContainer>
        <RegisterForm onFormSubmit={handleSubmit} />
      </CustomContainer>
    </main>
  );
};

export default RegisterPage;
