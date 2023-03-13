import { NavLink } from 'react-router-dom';
import styles from './auth-menu.module.scss';

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/register" className={styles.link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        LogIn
      </NavLink>
    </>
  );
};

export default AuthMenu;
