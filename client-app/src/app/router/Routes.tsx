import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../layout/App";
import HomePage from "../features/homepage/HomePage";
import LobbyPage from "../features/lobby/LobbyPage";
import SandboxPage from "../features/sandbox/SandboxPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/lobby/:id",
        element: <LobbyPage />,
      },
      {
        path: "/sandbox",
        element: <SandboxPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
