import { createBrowserRouter, redirect } from "react-router-dom";
import LandingPage from "../layouts/LandingPage/LandingPage";

export const ProviderRoutePaths = {
  Root: "/", // added root
  ErrorPage: "*",
  LandingPage: LandingPage
};

export const ProviderRouter = createBrowserRouter([
  {
    path: ProviderRoutePaths.Root,
    Component: LandingPage,
  },
]);