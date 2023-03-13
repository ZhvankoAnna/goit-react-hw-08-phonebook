import useForm from 'shared/hooks/useForm';
import CustomButton from 'shared/components/Button/Button';
import { Box, TextField } from '@mui/material';
import { fields } from './fields';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ initialState = INITIAL_STATE, onFormSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onFormSubmit,
  });

  const { name, email, password } = state;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 360,
        height: 400,
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        borderRadius: 1.5,
        backgroundColor: 'rgba(252, 252, 251, 0.3)',
      }}
    >
      <TextField
        variant="standard"
        value={name}
        onChange={handleChange}
        {...fields.name}
        sx={{ width: 280 }}
      />
      <TextField
        variant="standard"
        value={email}
        onChange={handleChange}
        {...fields.email}
        sx={{ width: 280 }}
      />
      <TextField
        variant="standard"
        value={password}
        onChange={handleChange}
        {...fields.password}
        sx={{ width: 280 }}
      />
      <CustomButton type="submit">Register</CustomButton>
    </Box>
  );
};

export default RegisterForm;
