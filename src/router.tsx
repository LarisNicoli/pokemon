import { createBrowserRouter } from "react-router-dom";
import { Home } from "./layouts/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
