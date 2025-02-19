import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VisitorPage from './pages/VisitorPage';
import LecturerDashboard from './pages/LecturerDashboard';
import IncomingLetterPage from './pages/Letters/IncomingLetterPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    console.log('Auth status:', authStatus);
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <LecturerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/letters/incoming"
          element={
            <ProtectedRoute>
              <IncomingLetterPage />
            </ProtectedRoute>
          }
        />
        {/* Default route - redirect to dashboard if authenticated, login if not */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;