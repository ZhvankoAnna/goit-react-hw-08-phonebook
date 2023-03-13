import PropTypes from 'prop-types';
import useForm from 'shared/hooks/useForm';
import { Box, TextField } from '@mui/material';
import CustomButton from 'shared/components/Button/Button';
import { fields } from './fields';
import styles from './contacts-form.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({
  initialState = INITIAL_STATE,
  onFormSubmit,
  isShowModal,
}) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onFormSubmit,
  });

  const { name, number } = state;

  return (
    <Box className={styles.form} component="form" onSubmit={handleSubmit}>
      <TextField
        className={styles.field}
        variant="standard"
        value={name}
        onChange={handleChange}
        {...fields.name}
      />
      <TextField
        className={styles.field}
        variant="standard"
        value={number}
        onChange={handleChange}
        {...fields.number}
      />
      <CustomButton type="submit">
        {isShowModal ? 'Apply changes' : 'Add contact'}
      </CustomButton>
    </Box>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  initialState: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onFormSubmit: PropTypes.func.isRequired,
  isShowModal: PropTypes.bool,
};
