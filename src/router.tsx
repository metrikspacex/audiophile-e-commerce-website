import { createBrowserRouter } from "react-router-dom";

import EarphonesPage from "./pages/category/earphones.tsx";
import HeadphonesPage from "./pages/category/headphones.tsx";
import CategoryLayout from "./pages/category/layout.tsx";
import SpeakersPage from "./pages/category/speakers.tsx";
import HomePage from "./pages/home/home.tsx";
import HomeLayout from "./pages/home/layout.tsx";

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
]);
export default router;
