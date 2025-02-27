import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VisitorPage from './pages/VisitorPage';
import LecturerDashboard from './pages/LecturerDashboard';
import ClassListPage from './pages/ClassListPage';
import ClassList from './components/class/ClassList';  // Add this import
import IncomingLetterPage from './pages/Letters/IncomingLetterPage';
import AttendancePage from './pages/AttendancePage';
import PublicVisitorForm from './pages/PublicVisitorForm';
import QRCodePage from './pages/QRCodePage';
import ScanAttendance from './components/attendance/ScanAttendance';
import IndividualClassListPage from './pages/IndividualClassListPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
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
        <Route path="/login" element={
          <Login onLoginSuccess={() => setIsAuthenticated(true)} />
        } />
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
          path="/class-list"
          element={
            <ProtectedRoute>
              <ClassListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/class-list/:courseId"
          element={
            <ProtectedRoute>
              <IndividualClassListPage />
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
        <Route
          path="/pages/VisitorPage"
          element={
            <ProtectedRoute>
              <VisitorPage />
            </ProtectedRoute>
          }
        />
        <Route path="/scan-attendance" element={<ScanAttendance />} />
        <Route path="/visitor-registration" element={<PublicVisitorForm />} />
        
        {/* Direct access routes */}
        <Route path="/visitor" element={
          <ProtectedRoute>
            <VisitorPage />
          </ProtectedRoute>
        } />
        <Route path="/letters" element={
          <ProtectedRoute>
            <IncomingLetterPage />
          </ProtectedRoute>
        } />
        <Route path="/attendance" element={
          <ProtectedRoute>
            <AttendancePage />
          </ProtectedRoute>
        } />
        
        <Route
          path="/qr-code"
          element={
            <ProtectedRoute>
              <QRCodePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pages/AttendancePage"
          element={
            <AttendancePage />
          }
        />
        
        {/* Default route - redirect to dashboard if authenticated, login if not */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;