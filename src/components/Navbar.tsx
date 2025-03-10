import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/authSlice";
import Button from "./Button";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  // const isLoggedIn = useAppSelector((state) => state.auth.isAuthenticated);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const navitems = [
    { title: 'Users', url: '/users' },
    { title: 'Races', url: '/races' },
    { title: 'Reports', url: '/reports' },
    { title: 'Settings', url: '/settings' },
  ];

  return (
    <nav role="navigation" className="border-gray-200 bg-dark">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-lead">
            Race Tracker <span className="text-red-800 text-3xl font-black">ADMIN</span>
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-light-300 hover:bg-darker focus:ring-light-300"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${!mobileMenuOpen && "hidden"} w-full md:block md:w-auto`}
          id="navbar"
        >
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-neutral-700 md:bg-transparent border-neutral-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-neutral-400 bg-zinc-900 rounded md:bg-transparent md:text-lead hover:text-lead md:p-0"
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>

            {navitems.map((prop, index) => (
              <li key={index}>
                <Link
                  to={prop.url}
                  className='block py-2 px-3 text-neutral-300 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-neutral-800 hover:text-lead'>
                  {prop.title}
                </Link>
              </li>
            ))}

            <li>
              <span className="block pb-2 md:pb-0 font-bold text-lead">{user!.email as string}</span>
            </li>
            <Button onClick={handleLogout}>
              Logout
            </Button>

          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar