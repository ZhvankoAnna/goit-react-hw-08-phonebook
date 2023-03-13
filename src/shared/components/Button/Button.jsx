import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import styles from './button.module.scss';

const CustomButton = ({ type = 'button', children, onBtnClick, startIcon }) => {
  return (
    <Button
      className={styles.btn}
      onClick={onBtnClick}
      type={type}
      variant="contained"
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onBtnClick: PropTypes.func,
  startIcon: PropTypes.node,
};
