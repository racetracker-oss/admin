import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen bg-dark'>
      <Navbar />
      <div className="h-[90vh] flex flex-col text-center justify-center items-center text-3xl sm:text-6xl">
        <h1 className="text-lead font-black">404</h1>
        <h2 className="text-lead font-semibold my-4">Page not found :'(</h2>
        <Button className='mt-7 block' onClick={() => navigate('/')}>Go back to home</Button>
      </div>
    </div>
  )
}

export default NotFound;