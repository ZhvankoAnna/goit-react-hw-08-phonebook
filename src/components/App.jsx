import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/auth-operation';
import { createTheme, ThemeProvider } from '@mui/material';
import NavMenu from './NavMenu/NavMenu';
import PageRoutes from './PageRoutes';

const theme = createTheme({
palette:{
  primary:{
    main: "#43A047",
  }
},
typography: {
fontSize: 14,

}
})

const App = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(refresh())
}, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <NavMenu />
      <PageRoutes />
    </ThemeProvider>
  );
};

export default App;
