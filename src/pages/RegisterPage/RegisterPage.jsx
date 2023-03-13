import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operation';
import { Container } from '@mui/material';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <Container
        maxWidth="lg"
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#FFF59D',
        }}
      >
        <RegisterForm onFormSubmit={handleSubmit} />
      </Container>
    </main>
  );
};

export default RegisterPage;
