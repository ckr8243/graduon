import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GradeInputPage from './pages/GradeInputPage';
import GraduationPage from './pages/GraduationPage';
import SemesterSelectPage from './pages/SemesterSelectPage';
import SemesterResultPage from './pages/SemesterResultPage';
import { CreditProvider } from './contexts/CreditContext';

function App() {
  return (
    <CreditProvider>
      <Router>
        <Routes>
          {/* ✅ 기본 진입은 홈으로 */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* ✅ 다른 팀원이 만드는 홈 */}
          <Route path="/home" element={<div>홈</div>} />

          {/* ✅ 너가 만드는 학점관리 4페이지 */}
          <Route path="/credit/input" element={<GradeInputPage />} />
          <Route path="/credit/summary" element={<GraduationPage />} />
          <Route path="/credit/select-semester" element={<SemesterSelectPage />} />
          <Route path="/credit/result" element={<SemesterResultPage />} />
        </Routes>
      </Router>
    </CreditProvider>
  );
}

export default App;
