import { createBrowserRouter, Outlet } from "react-router";
import Navbar from "./../components/Shared/Navbar/Navbar";
import Footer from "./../components/Shared/Footer/Footer";
import Home from "./../pages/Home";
import Products from "./../pages/Products";
import ProductDetails from "./../pages/ProductDetails";
import Cart from "./../pages/Cart";
import ErrorPage from "./../pages/ErrorPage";
import { CartProvider } from "./../context/CartContext";
import Blog from "../pages/Blog/Blog";
import PostDetails from "../pages/Blog/PostDetails";
import About from "../pages/About";
import Contact from "./../pages/Contact";
import ScrollToTop from "../components/Shared/ScrollToTop";
import PrivacyPolicy from "./../pages/PrivacyPolicy";
import AmazonAffiliateAdvertiserDisclosure from "../pages/AmazonAffiliateAdvertiserDisclosure";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </CartProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:postId",
        element: <PostDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/amazonaffiliateadvertiserdisclosure",
        element: <AmazonAffiliateAdvertiserDisclosure />,
      },
    ],
  },
]);
