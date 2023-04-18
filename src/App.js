import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Login from './FolderStructure/Pages/Login/Login';
import RegistrationPage from './FolderStructure/RegistrationPage/RegistrationPage';
import StudentPanel from './FolderStructure/Pages/StudentPanel/StudentPanel';
import StudentProfile from './FolderStructure/Components/StudentProfile/StudentProfile';
import StudentMeal from './FolderStructure/Components/StudentMeal/StudentMeal';
import RoomStatus from './FolderStructure/Components/RoomStatus/RoomStatus';
import Payment from './FolderStructure/Components/Payment/Payment';
import Visitors from './FolderStructure/Components/Visitors/Visitors';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: '/', element: <Login></Login> },
        { path: '/login', element: <Login></Login> },
        { path: '/registration', element: <RegistrationPage></RegistrationPage> },
        {
          path: '/student-panel',
          element: <StudentPanel></StudentPanel>,
          children: [
            { path: '/student-panel', element: <StudentProfile></StudentProfile> },
            { path: '/student-panel/profile', element: <StudentProfile></StudentProfile> },
            { path: '/student-panel/meal', element: <StudentMeal></StudentMeal> },
            { path: '/student-panel/room-status', element: <RoomStatus></RoomStatus> },
            { path: '/student-panel/payment', element: <Payment></Payment> },
            { path: '/student-panel/visitors', element: <Visitors></Visitors>},
          ]
        },
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
