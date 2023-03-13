import PropTypes from 'prop-types';
import useForm from 'shared/hooks/useForm';
import CustomButton from 'shared/components/Button/Button';
import { Box, TextField } from '@mui/material';
import { fields } from './fields';
import styles from './register-form.module.scss';

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
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <TextField
        variant="standard"
        value={name}
        onChange={handleChange}
        {...fields.name}
        className={styles.field}
      />
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
      <CustomButton type="submit">Register</CustomButton>
    </Box>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  initialState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onFormSubmit: PropTypes.func.isRequired,
};
