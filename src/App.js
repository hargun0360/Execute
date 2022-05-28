import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login/Login';
function App() {
  return (
    <>
        <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
