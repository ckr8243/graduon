import React, { useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCredit } from '../contexts/CreditContext';
import BottomNav from '../components/BottomNav';
import StepIndicator from '../components/StepIndicator';
import { PieChart, Pie, Cell } from 'recharts';

function GraduationPage() {
  const navigate = useNavigate();
  const { subjects } = useCredit();

  // 콘솔로 subjects 출력해서 값이 제대로 전달되는지 확인
  console.log("GraduationPage - 입력된 과목들:", subjects);

  // 학점 총합 계산 (문자열일 수 있으므로 숫자로 변환)
  const totalCredits = subjects.reduce((sum, subj) => {
    const creditNum = Number(subj.credit);
    return sum + (isNaN(creditNum) ? 0 : creditNum);
  }, 0);

  const remaining = Math.max(0, 134 - totalCredits);
  const percent = Math.floor((totalCredits / 134) * 100);

  const data = [
    { name: '이수한 학점', value: totalCredits },
    { name: '남은 학점', value: remaining },
  ];

  const COLORS = ['#0d6efd', '#e9ecef'];

  return (
    <>
      <Container className="py-4 mb-5" style={{ maxWidth: '480px' }}>
        <Card className="p-4 border-0 shadow-sm rounded-4">
          <h5 className="fw-bold">학점관리</h5>
          <p className="text-muted small">졸업요건 계산기</p>

          <StepIndicator step={2} />

          <div className="d-flex justify-content-center">
            <PieChart width={180} height={180}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={1}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>

          <p className="text-center mt-3 fw-semibold">
            졸업까지 <span className="text-primary">{100 - percent}%</span> 남았어요
          </p>

          <div className="d-grid mt-4">
            <Button onClick={() => navigate('/credit/select-semester')}>
              확인하기
            </Button>
          </div>
        </Card>
      </Container>

      <BottomNav />
    </>
  );
}

export default GraduationPage;
