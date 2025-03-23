import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import CoreGroup from "./pages/CoreGroup";
import Resettlement from "./pages/Resettlement";
import Emergency from "./pages/Emergency";
import Volunteer from "./pages/Volunteer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/resettlement",
          element: <Resettlement />,
        },
        {
          path: "/emergency",
          element: <Emergency />,
        },
        {
          path: "/volunteer",
          element: <Volunteer />,
        },
        {
          path: "/core-group",
          element: <CoreGroup />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
