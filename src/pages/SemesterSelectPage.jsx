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
          <h5 className="fw-bold">학점관리</h5>
          <p className="text-muted small">학기별 학점 현황</p>

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
                variant="primary"
                size="md"
                disabled={!year || !semester}
                onClick={handleNext}
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
