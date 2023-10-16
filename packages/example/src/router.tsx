import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Button from "./components/Button";
import Test from "./components/Test";

export const components = [
  {
    path: "Button",
    element: <Button />,
  },
  {
    path: "Text",
    element: <Test />,
  },
];

const config = [
  {
    path: "/",
    element: <Layout />,
    children: components,
  },
];

const router = createBrowserRouter(config);

export default router;
