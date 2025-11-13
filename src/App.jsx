import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./pages/login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import RegisterPage from "./pages/register";
import { useEffect } from "react";
import { fetchUserAccount } from "./services/api";
import { useDispatch, useSelector } from "react-redux";
import { doGetAccountAction } from "./redux/accountSlice";
import Loading from "./components/Loading";
import ErrorPage from "./components/error";
import AdminPage from "./pages/admin";
import ProtectedRoute from "./components/ProtectedRoute";

const Layout = () => {
  const isAdminRoute = window.location.pathname.startsWith('/admin')
  return (
    <>
      <div>
        {!isAdminRoute ? <Header /> : <></>}
        <Outlet />
        {!isAdminRoute ? <Footer /> : <></>}
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/admin",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>
      }
    ]
  }
]);

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.account.isAuthenticated)
  const isLoading = useSelector(state => state.account.isLoading)
  const getAccount = async () => {
    const res = await fetchUserAccount()
    if (res?.data) {
      dispatch(doGetAccountAction(res.data))
    }
  }

  useEffect(() => {
    getAccount()
  }, [])

  return (
    <>
      {(isLoading === true) ? <Loading /> : <RouterProvider router={router} />}
    </>
  )
}

export default App
