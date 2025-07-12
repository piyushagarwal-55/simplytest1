// router.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Login from './pages/Login';
import { ErrorPage } from './pages/ErrorPage';
import { getProducts } from './api/getProducts';
import { ShowProducts } from './products/ShowProducts';
import { SingleProduct } from './products/SingleProduct';
import { showsingleproduct } from './api/showsingleproduct';
import { ScheduleCall } from './pages/ScheduleCall';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,  // This is the default route for "/"
          element: <Home />
        },
        // {
        //   path: "schedule-call",  // Corrected - this will match "/schedule-call"
        //   element: <ScheduleCall />
        // },
        {
          path: "about",
          element: <About />
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "services",
          element: <ShowProducts/>,
          loader: getProducts
        },
        {
          path: "services/:id",
          element: <SingleProduct/>,
          loader: showsingleproduct
        }
      ]
    }
  ]);
  
  return <RouterProvider router={router}/>;
}

export default App;