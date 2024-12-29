import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const AuthWrapper = (props: any) => {
  const user = useAppSelector((state) => state.auth.user);

  if (user === null) {
    return <Navigate to='/' />
  }
  return props.children;
};

export default AuthWrapper;