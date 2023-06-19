import { createBrowserRouter, json } from "react-router-dom";

import content from "./assets/content.json";
import EarphonesPage from "./pages/category/earphones.tsx";
import HeadphonesPage from "./pages/category/headphones.tsx";
import CategoryLayout from "./pages/category/layout.tsx";
import SpeakersPage from "./pages/category/speakers.tsx";
import CheckoutPage from "./pages/checkout/check.tsx";
import CheckoutLayout from "./pages/checkout/layout.tsx";
import HomePage from "./pages/home/home.tsx";
import HomeLayout from "./pages/home/layout.tsx";
import ProductError from "./pages/product/error.tsx";
import ProductLayout from "./pages/product/layout.tsx";
import ProductSlug from "./pages/product/product-slug.tsx";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
    element: <HomeLayout />,
    path: "/",
  },
  {
    children: [
      {
        element: <EarphonesPage />,
        path: "/category/earphones",
      },
      {
        element: <HeadphonesPage />,
        path: "/category/headphones",
      },
      {
        element: <SpeakersPage />,
        path: "/category/speakers",
      },
    ],
    element: <CategoryLayout />,
    path: "/category",
  },
  {
    children: [
      {
        element: <CheckoutPage />,
        path: "/checkout/",
      },
    ],
    element: <CheckoutLayout />,
    path: "/checkout",
  },
  {
    children: [
      {
        element: <ProductSlug />,
        errorElement: <ProductError />,
        loader: async ({ params }) => {
          const _content = content.find((item) => item.slug === params.slug);

          if (_content) {
            return _content;
          }

          throw json({
            message: "Product not found",
          });
        },
        path: ":slug",
      },
    ],
    element: <ProductLayout />,
    path: "/product/",
  },
]);
export default router;
