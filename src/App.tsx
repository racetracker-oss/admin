import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthWrapper from "./features/auth/AuthWrapper";
import Dashboard from "./pages/Dashboard";

const Layout = lazy(() => import('./Layout'));

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        (<Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'dashboard', element: <AuthWrapper><Dashboard /></AuthWrapper> },
        // { path: 'dashboard', element: <Dashboard /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App
