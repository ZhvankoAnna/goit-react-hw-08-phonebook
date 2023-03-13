import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute/PublicRoute';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const PageRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        {/* </Route>
        <Route element={<PublicRoute/>}> */}
          <Route path="/contacts" element={<ContactsPage />} />
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;