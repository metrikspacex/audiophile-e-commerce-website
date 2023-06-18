import { createBrowserRouter, json } from "react-router-dom";

import content from "./assets/content.json";
import EarphonesPage from "./pages/category/earphones.tsx";
import HeadphonesPage from "./pages/category/headphones.tsx";
import CategoryLayout from "./pages/category/layout.tsx";
import SpeakersPage from "./pages/category/speakers.tsx";
import HomePage from "./pages/home/home.tsx";
import HomeLayout from "./pages/home/layout.tsx";
import ProductError from "./pages/product/error.tsx";
import ProductLayout from "./pages/product/layout.tsx";
import ProductId from "./pages/product/product-id.tsx";

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
        element: <ProductId />,
        errorElement: <ProductError />,
        loader: async ({ params }) => {
          const _content = content.find(
            (item) => item.id.toString() === params.id
          );

          if (_content) {
            return _content;
          }

          throw json({
            message: "Product not found",
          });
        },
        path: ":id",
      },
    ],
    element: <ProductLayout />,
    path: "/product/",
  },
]);
export default router;
