import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./pages/login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      { index: true, element: <Home /> }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
