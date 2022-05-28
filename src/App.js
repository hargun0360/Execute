import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SignUp from './components/auth/SignUp/SignUp';
// import Login from './components/auth/Login/Login';
// import Otp from './components/auth/OTP/Otp';
// import Details from './components/auth/Detail/Detail';
// import Forgot from './components/auth/ForgotPass/Forgot';
// import ResetPass from './components/auth/ForgotPass/ResetPass';
// import Home from './components/layout/Home';
function App() {
  return ( <>
       <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/detail" element={<Details />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/reset" element={<ResetPass />} />
        <Route exact path="/" element={<Home/>}/> */}
      </Routes>
    </>
  );
}

export default App;
