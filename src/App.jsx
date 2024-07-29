import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Login from "./Login";
import Signup from "./Signup";
import Favorite from "./Favorite";
import About from "./About";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },    {
      path: "/About",
      element: <About/>,
    },
    {
      path: "/signUp",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },  {
      path: "/Favorite",
      element: <Favorite/>,
    },  {
      path: "/details/:id",
      element: <Info/>,
    },
  ]);

  return (
<RouterProvider router={router} />


  );
}
export default App;
