import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import BottomNav from '../components/BottomNav';
import { useCredit } from '../contexts/CreditContext';

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

  const totalCredits = filteredSubjects.length * 3; // 과목당 3학점 기준
  const totalPoints = filteredSubjects.reduce(
    (sum, subj) => sum + (gradeScale[subj.grade] || 0) * 3, 0
  );
  const avgGPA = filteredSubjects.length ? (totalPoints / totalCredits) : 0;

  return (
    <>
      <Container className="py-4 mb-5" style={{ maxWidth: '480px' }}>
        <Card className="p-4 border-0 shadow-sm rounded-4 text-center">
          <h5 className="fw-bold">학점관리</h5>
          <p className="text-muted small">학기별 학점 현황</p>

          <h6 className="mt-4">{selectedYear}학년 {selectedSemester} 평균학점</h6>
          <h3 className="fw-bold text-primary">
            {avgGPA.toFixed(2)} / 4.5
          </h3>

          <h6 className="mt-4">{selectedYear}학년 {selectedSemester} 이수학점</h6>
          <h3 className="fw-bold text-primary">
            {totalCredits} / 126
          </h3>
        </Card>
      </Container>

      <BottomNav />
    </>
  );
}

export default SemesterResultPage;
