import { NavLink } from 'react-router-dom';
// import { Link } from "@mui/material";

const AuthMenu = () => {
    return (
      < >
      {/* <Link href="/register" underline="none" sx={{color: "common.white", fontWeight: 600,}}>Registration</Link>
      <Link href="//login" underline="none" sx={{color: "common.white", fontWeight: 600,}}>LogIn</Link> */}

        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/login">LogIn</NavLink>
      </>
    );
  };

  export default AuthMenu;