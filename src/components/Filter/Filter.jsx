import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { TextField } from '@mui/material';
import styles from './filter.module.scss';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <TextField
      type="text"
      value={filter}
      onChange={handleFilterChange}
      variant="standard"
      label="Filter"
      className={styles.field}
    />
  );
};

export default Filter;
