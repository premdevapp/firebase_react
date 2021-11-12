import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx";
import Homepage from "../pages/HomePage.jsx";
import Loginpage from "../pages/LoginPage.jsx";
import NotfoundPage from "../pages/NotFoundPage.jsx";
import Profilepage from "../pages/ProfilePage.jsx";
import ProtectedPage from "../pages/ProtectedPage.jsx";
import Registerpage from "../pages/RegisterPage.jsx";
import ResetPasswordPage from "../pages/ResetPassword.jsx";

const AppRouter = (props) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/protected-page" element={<ProtectedPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
