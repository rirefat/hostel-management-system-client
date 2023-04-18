import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Login from './FolderStructure/Pages/Login/Login';
import RegistrationPage from './FolderStructure/RegistrationPage/RegistrationPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {path:'/', element: <Login></Login>},
        {path:'/login', element: <Login></Login>},
        {path:'/registration', element: <RegistrationPage></RegistrationPage>},
      ]
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
