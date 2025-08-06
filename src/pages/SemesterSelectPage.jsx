import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import StepIndicator from '../components/StepIndicator';

function SemesterSelectPage() {
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const handleNext = () => {
    localStorage.setItem('selectedYear', year);
    localStorage.setItem('selectedSemester', semester);
    navigate('/credit/result');
  };

  return (
    <>
      <Container className="py-4 mb-5" style={{ maxWidth: '480px' }}>
        <Card className="p-4 border-0 shadow-sm rounded-4">
          <h3 className="fw-bold">학점관리</h3>
          <h5 className="text-muted large">학기별 학점 현황</h5>
          <p
            className="small mb-4"
            style={{ color: '#6c757d', opacity: 0.6 }}
          >
            OOO님의 정보를 바탕으로,< br/>
            학기별 학점을 정리해 드릴게요!
          </p>

          <StepIndicator step={3} />

          <p className="text-center fw-semibold mt-2 mb-4" style={{ fontSize: '0.95rem' }}>
            OOO님이 학점을 확인하고 싶은<br />학년과 학기를 선택해주세요!
          </p>

          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Label className="small">학년 선택</Form.Label>
                <Form.Select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  size="sm"
                >
                  <option value="">선택</option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                  <option value="4">4학년</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Label className="small">학기 선택</Form.Label>
                <Form.Select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  size="sm"
                >
                  <option value="">선택</option>
                  <option value="1학기">1학기</option>
                  <option value="2학기">2학기</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="d-grid">
              <Button
                style={{ backgroundColor: '#3e3e9aff', borderColor: '#3e3e9aff' }}
                size="md"
                disabled={!year || !semester}
                onClick={() => navigate('/credit/result')}
              >
                다음 단계로 →
              </Button>

            </div>
          </Form>
        </Card>
      </Container>

      <BottomNav />
    </>
  );
}

export default SemesterSelectPage;
