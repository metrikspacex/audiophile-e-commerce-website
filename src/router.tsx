import { createBrowserRouter } from "react-router-dom";

import content from "./assets/content.json";
import EarphonesPage from "./pages/category/earphones.tsx";
import HeadphonesPage from "./pages/category/headphones.tsx";
import CategoryLayout from "./pages/category/layout.tsx";
import SpeakersPage from "./pages/category/speakers.tsx";
import CheckoutPage from "./pages/checkout/checkout.tsx";
import CheckoutLayout from "./pages/checkout/layout.tsx";
import HomePage from "./pages/home/home.tsx";
import HomeLayout from "./pages/home/layout.tsx";
import ProductError from "./pages/product/error.tsx";
import ProductLayout from "./pages/product/layout.tsx";
import ProductSlug from "./pages/product/product-slug.tsx";
import Root from "./pages/root.tsx";

const router = createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <HomePage />,
            index: true,
          },
        ],
        element: <HomeLayout />,
        path: "/audiophile-e-commerce-website/",
      },
      {
        children: [
          {
            element: <EarphonesPage />,
            path: "/audiophile-e-commerce-website/category/earphones/",
          },
          {
            element: <HeadphonesPage />,
            path: "/audiophile-e-commerce-website/category/headphones/",
          },
          {
            element: <SpeakersPage />,
            path: "/audiophile-e-commerce-website/category/speakers/",
          },
        ],
        element: <CategoryLayout />,
        path: "/audiophile-e-commerce-website/category/",
      },
      {
        children: [
          {
            element: <CheckoutPage />,
            path: "/audiophile-e-commerce-website/checkout/",
          },
        ],
        element: <CheckoutLayout />,
        path: "/audiophile-e-commerce-website/checkout/",
      },
      {
        children: [
          {
            element: <ProductSlug />,
            errorElement: <ProductError />,
            index: true,
            loader: async ({ params }) => {
              const _content = content.find(
                (item) => item.slug === params.slug
              );

              if (_content) {
                return _content;
              }
            },
            path: "/audiophile-e-commerce-website/product/:slug",
          },
        ],
        element: <ProductLayout />,
        path: "/audiophile-e-commerce-website/product/",
      },
    ],
    element: <Root />,
    path: "/audiophile-e-commerce-website/",
  },
]);
export default router;
