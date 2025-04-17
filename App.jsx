import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ShiftLog from './components/ShiftLog';
import ScratchOffTracker from './components/ScratchOffTracker';
import Reports from './components/Reports';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

export default function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <ShiftLog /> : <Navigate to="/login" />} />
        <Route path="/tracker" element={user ? <ScratchOffTracker /> : <Navigate to="/login" />} />
        <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}