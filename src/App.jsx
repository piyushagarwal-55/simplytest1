// router.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import { Home } from './pages/Home';  // Named import
import { About } from './pages/About'; // Named import
import Login from './pages/Login';
import { ErrorPage } from './pages/ErrorPage';
import { getProducts } from './api/getProducts';
import { ShowProducts } from './products/ShowProducts';
import { SingleProduct } from './products/SingleProduct';
import { showsingleproduct } from './api/showsingleproduct';

const App = () =>{
  const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path : "login",
        element:<Login/>
      },
      {
        path : "services",
        element : <ShowProducts/>,
        loader : getProducts
      },
      {
        path : "services/:id",
        element : <SingleProduct/>,
        loader : showsingleproduct
      }
    ]
  }
]);
    return <RouterProvider router={router}/>;
}

export default App;
