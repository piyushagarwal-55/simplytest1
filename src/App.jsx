// router.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Login from './pages/Login';
import { ErrorPage } from './pages/ErrorPage';
// import { getProducts } from './api/getProducts';
// import { ShowProducts } from './products/ShowProducts';
// import ModesWebsite from './products/SingleProduct';
// import { showsingleproduct } from './api/showsingleproduct';
import { ScheduleCall } from './pages/ScheduleCall';
import ModesIncHomepage from './products/SingleProduct';

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
         element: <ModesIncHomepage/>,
          // loader: getProducts
        },
        // {
        //   path: "services/:id",
         
        //   loader: showsingleproduct
        // }
      ]
    }
  ]);
  
  return <RouterProvider router={router}/>;
}

export default App;