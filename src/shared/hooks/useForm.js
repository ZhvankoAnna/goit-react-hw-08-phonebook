import { useState } from 'react';

const useForm = ({ initialState, onFormSubmit }) => {
  const [state, setState] = useState({...initialState});

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value, checked, type } = target;
      const newValue = type === 'checkbox' ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit({ ...state });
    setState({ ...initialState });
  };

  return {state, handleChange, handleSubmit}
};

export default useForm;
