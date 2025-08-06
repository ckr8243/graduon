import React from 'react';
import { Container, Card } from 'react-bootstrap';
import BottomNav from '../components/BottomNav';
import { useCredit } from '../contexts/CreditContext';
import StepIndicator from '../components/StepIndicator';


function SemesterResultPage() {
  const { subjects } = useCredit();

  const selectedYear = localStorage.getItem('selectedYear');
  const selectedSemester = localStorage.getItem('selectedSemester');

  const filteredSubjects = subjects.filter(
    (subj) => subj.year === selectedYear && subj.semester === selectedSemester
  );

  const gradeScale = {
    'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0,
    'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1.0, 'F': 0.0,
  };

  const totalCredits = filteredSubjects.reduce(
    (sum, subj) => sum + (parseFloat(subj.credit) || 0),
    0
  );

  const totalPoints = filteredSubjects.reduce(
    (sum, subj) => sum + ((gradeScale[subj.grade] || 0) * (parseFloat(subj.credit) || 0)),
    0
  );

  const avgGPA = totalCredits ? (totalPoints / totalCredits) : 0;

  return (
    <>
      <Container className="py-4 mb-5" style={{ maxWidth: '480px' }}>
        <Card className="p-4 border-0 shadow-sm rounded-4 text">
          <h3 className="fw-bold">학점관리</h3>
          <h5 className="text-muted large">학기별 학점 현황</h5>
          <p
            className="small mb-4"
            style={{ color: '#6c757d', opacity: 0.6 }}
          >
            OOO님의 정보를 바탕으로,< br/>
            학기별 학점을 정리해 드릴게요!
          </p>
          
          {/* ✅ 1-2-3 단계 표시 */}
          <StepIndicator step={3} />

          {/* 평균학점 섹션 */}
          <h6 className="mt-4 text-center">
            {selectedYear}학년 {selectedSemester} 평균학점
          </h6>
          <div className="d-flex justify-content-center align-items-end gap-1 mb-3">
            <span style={{ color: '#3e3e9a', fontSize: '2rem', fontWeight: 'bold' }}>
              {avgGPA.toFixed(2)}
            </span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>/ 4.5</span>
          </div>

          {/* 이수학점 섹션 */}
          <h6 className="mt-4 text-center">
            {selectedYear}학년 {selectedSemester} 이수학점
          </h6>
          <div className="d-flex justify-content-center align-items-end gap-1">
            <span style={{ color: '#3e3e9a', fontSize: '2rem', fontWeight: 'bold' }}>
              {totalCredits}
            </span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>/ 134</span>
          </div>
        </Card>
      </Container>

      <BottomNav />
    </>
  );
}

export default SemesterResultPage;
