import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Login from "../../Pages/Login/Login";
import RegistrationPage from "../../RegistrationPage/RegistrationPage";
import StudentPanel from "../../Pages/StudentPanel/StudentPanel";
import StudentProfile from "../StudentProfile/StudentProfile";
import StudentMeal from "../StudentMeal/StudentMeal";
import RoomStatus from "../RoomStatus/RoomStatus";
import Payment from "../Payment/Payment";
import Visitors from "../Visitors/Visitors";

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

  export default router;