import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./pages/Layouts/LayoutMain";
import Cities from "./pages/Cities/Cities";

const router = createBrowserRouter([
  {
    path:"/",
    element: <LayoutMain/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cities",
        element:<Cities/>
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}/>


  );
}

export default App;