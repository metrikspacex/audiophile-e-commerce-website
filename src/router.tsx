import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";
import HomePage from "./pages/home/home.tsx";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
    element: <Layout />,
    path: "/",
  },
]);
export default router;
