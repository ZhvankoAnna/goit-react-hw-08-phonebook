import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { Box, Typography } from '@mui/material';
import CustomButton from 'shared/components/Button/Button';
import { logout } from 'redux/auth/auth-operation';
import styles from './user-menu.module.scss';

const UserMenu = () => {
  const name = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box component="div" className={styles.wrapper}>
      <NavLink to="/contacts" className={styles.link}>
        Contacts
      </NavLink>
      <Box component="div" className={styles.box}>
        <Typography className={styles.text}>Hello, {name}</Typography>
        <CustomButton onBtnClick={handleLogout}>LogOut</CustomButton>
      </Box>
    </Box>
  );
};

export default UserMenu;
