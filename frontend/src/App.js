import "./App.css";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import UserProfile from "./pages/UserProfile";
import AddPatient from "./pages/AddPatient";
import ViewAllpatients from "./pages/ViewAllPatients";
import AddVitalSigns from "./pages/AddVitalSigns";
import AddDiagnosis from "./pages/AddDiagnosis";
import SinglePatient from "./pages/SinglePatient";
import Dashboard from "./pages/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LogIn /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard/me", element: <UserProfile /> },
      { path: "/dashboard/addpatient", element: <AddPatient /> },
      { path: "/dashboard/patients", element: <ViewAllpatients /> },
      { path: "/dashboard/patient", element: <SinglePatient /> },
      { path: "/dashboard/addvitals", element: <AddVitalSigns /> },
      { path: "/dashboard/adddiagnosis", element: <AddDiagnosis /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
