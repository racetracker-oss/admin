import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthWrapper from './features/auth/AuthWrapper';

const Layout = () => {
  return (
    <>
      <AuthWrapper>
        <Navbar />
      </AuthWrapper>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;