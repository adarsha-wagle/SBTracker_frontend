import React from "react";
import "./App.css";
import Map from "./pages/map.pages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/home.pages";
import RouteDetailsPage from "./pages/route_details.pages";
import LoginPage from "./pages/login.pages";
import "react-toastify/dist/ReactToastify.css";

import AdminDashboardPage from "./pages/admin_dashboard.pages";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="map" element={<Map />} />
      <Route path="route-details" element={<RouteDetailsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
