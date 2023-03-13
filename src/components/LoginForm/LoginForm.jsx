import PropTypes from 'prop-types';
import useForm from 'shared/hooks/useForm';
import CustomButton from 'shared/components/Button/Button';
import { Box, TextField } from '@mui/material';
import { fields } from './fields';
import styles from './login-form.module.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ initialState = INITIAL_STATE, onFormSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onFormSubmit,
  });

  const { email, password } = state;
  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <TextField
        variant="standard"
        value={email}
        onChange={handleChange}
        {...fields.email}
        className={styles.field}
      />
      <TextField
        variant="standard"
        value={password}
        onChange={handleChange}
        {...fields.password}
        className={styles.field}
      />
      <CustomButton type="submit">LogIn</CustomButton>
    </Box>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  initialState: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onFormSubmit: PropTypes.func.isRequired,
};
