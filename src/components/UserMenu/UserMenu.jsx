import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { Link, Box, Typography } from '@mui/material';
import CustomButton from 'shared/components/Button/Button';
import { logout } from 'redux/auth/auth-operation';

const UserMenu = () => {
  const name = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box component="div" sx={{display: "flex", gap: 2, alignItems: "center"}}>
      <NavLink to="/contacts">Contacts</NavLink>
      {/* <Link href="/register" underline="none" sx={{color: "common.white", fontWeight: 600,}}>Registration</Link> */}
      <Box component="div" sx={{display: "flex", gap: 2, alignItems: "center"}}>
        <Typography>Hello, {name}</Typography>
        <CustomButton onBtnClick={handleLogout}>LogOut</CustomButton>
      </Box>
    </Box>
  );
};

export default UserMenu;
