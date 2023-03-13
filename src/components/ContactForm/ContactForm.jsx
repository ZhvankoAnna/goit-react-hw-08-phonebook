import useForm from 'shared/hooks/useForm';
import { Box, TextField } from '@mui/material';
import CustomButton from 'shared/components/Button/Button';
import { fields } from './fields';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({initialState = INITIAL_STATE, onFormSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onFormSubmit,
  });

  const { name, number } = state;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 300, mb: 6 }}
    >
      <TextField
        variant="standard"
        value={name}
        onChange={handleChange}
        {...fields.name}
      />
      <TextField
        variant="standard"
        value={number}
        onChange={handleChange}
        {...fields.number}
      />
      <CustomButton type="submit">Add contact</CustomButton>
    </Box>
  );
};

export default ContactForm;
