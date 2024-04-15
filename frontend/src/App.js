import "./App.css";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import UserProfile from "./pages/UserProfile";
import AddPatient from "./pages/AddPatient";
import ViewAllpatients from "./pages/ViewAllPatients";
import AddVitalSigns from "./pages/AddVitalSigns";
import AddDiagnosis from "./pages/AddDiagnosis";
import SinglePatient from "./pages/SinglePatient";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/", element: <LogIn /> },
  { path: "/me", element: <UserProfile /> },
  { path: "/addpatient", element: <AddPatient /> },
  { path: "/patients", element: <ViewAllpatients /> },
  { path: "/vitals", element: <AddVitalSigns /> },
  { path: "/diagnosis", element: <AddDiagnosis /> },
  { path: "/patient", element: <SinglePatient /> },
]);

function App() {
  return (
    <>
    <Navbar/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
