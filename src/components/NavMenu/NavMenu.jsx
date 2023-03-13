import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { Container } from '@mui/material';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import styles from './nav-menu.module.scss';

const NavMenu = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <header>
      <Container maxWidth="lg" className={styles.container}>
        <nav className={styles.navMenu}>
          {isLogin ? <UserMenu /> : <AuthMenu />}
        </nav>
      </Container>
    </header>
  );
};

export default NavMenu;
