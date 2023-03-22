import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import { Launches } from "./features/launches";
import { Launch } from "./features/launch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Launches />,
  },
  {
    path: "/:launchId",
    element: <Launch />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
