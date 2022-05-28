import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SignUp from './components/auth/SignUp/SignUp';
import Login from './components/auth/Login/Login';
import Otp from './components/auth/OTP/OTP';
import Forgot from './components/auth/ForgotPass/ForgotPass';
function App() {
  return ( <>
       <Routes>
         {/* Auth Routes */}
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/forgot" element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
