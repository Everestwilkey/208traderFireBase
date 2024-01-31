import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages";
// Create a router instance using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // Define the component to render at the root path
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>About</h1> // Define the component to render at the /about path
      </div>
    ),
  },
]);

// Define the App component
const App = () => {
  return <RouterProvider router={router} />; // Use RouterProvider to make the router available throughout your component tree
};

export default App; // Export the App component to be used in other parts of your application
