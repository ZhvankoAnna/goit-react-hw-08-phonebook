import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import { Container } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(login(data));
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
        <LoginForm onFormSubmit={handleSubmit} />
      </Container>
    </main>
  );
};

export default LoginPage;
