import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import styles from './container.module.scss';

const CustomContainer = ({ children }) => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      {children}
    </Container>
  );
};

export default CustomContainer;

CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
