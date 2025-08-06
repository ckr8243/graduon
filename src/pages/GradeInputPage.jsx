import React, { useState } from 'react';
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import StepIndicator from '../components/StepIndicator';
import { useCredit } from '../contexts/CreditContext';

function GradeInputPage() {
  const navigate = useNavigate();
  const { setSubjects } = useCredit();

  const [studentId, setStudentId] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [subjectsInput, setSubjectsInput] = useState([
    {
      name: '',
      credit: '',
      grade: '',
      type: '',
      retake: '',
      year: '',
      semester: '',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...subjectsInput];
    updated[index][field] = value;
    setSubjectsInput(updated);
  };

  const handleAddSubject = () => {
    setSubjectsInput([
      ...subjectsInput,
      {
        name: '',
        credit: '',
        grade: '',
        type: '',
        retake: '',
        year: '',
        semester: '',
      },
    ]);
  };

  const handleSubmit = () => {
    const enrichedSubjects = subjectsInput.map((s) => ({
      ...s,
      year,
      semester,
    }));
    setSubjects(enrichedSubjects);
    navigate('/credit/summary');
  };

  return (
    <>
      <Container className="py-4 mb-5" style={{ maxWidth: '480px' }}>
        <Card className="p-4 border-0 shadow-sm rounded-4">
          <h5 className="fw-bold">학점관리</h5>
          <p className="text-muted small">학점 입력</p>

          {/* ✅ 1-2-3 단계 표시 */}
          <StepIndicator step={1} />

          {/* 학번, 학년, 학기 */}
          <Row className="mb-3">
            <Col>
              <Form.Label className="small">학번</Form.Label>
              <Form.Control
                size="sm"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label className="small">학년</Form.Label>
              <Form.Select
                size="sm"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">선택</option>
                <option value="1">1학년</option>
                <option value="2">2학년</option>
                <option value="3">3학년</option>
                <option value="4">4학년</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label className="small">학기</Form.Label>
              <Form.Select
                size="sm"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value="">선택</option>
                <option value="1학기">1학기</option>
                <option value="2학기">2학기</option>
              </Form.Select>
            </Col>
          </Row>

          {/* 과목 입력 */}
          {subjectsInput.map((subject, index) => (
            <div key={index} className="border rounded-3 p-3 mb-3">
              <Row className="mb-2">
                <Col>
                  <Form.Label className="small">과목명</Form.Label>
                  <Form.Control
                    size="sm"
                    value={subject.name}
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label className="small">재수강 여부</Form.Label>
                  <Form.Select
                    size="sm"
                    value={subject.retake}
                    onChange={(e) => handleChange(index, 'retake', e.target.value)}
                  >
                    <option value="">선택</option>
                    <option value="Y">재수강</option>
                    <option value="N">아님</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <Form.Label className="small">학점</Form.Label>
                  <Form.Select
                    size="sm"
                    value={subject.credit}
                    onChange={(e) => handleChange(index, 'credit', e.target.value)}
                  >
                    <option value="">선택</option>
                    <option value="1">1학점</option>
                    <option value="2">2학점</option>
                    <option value="3">3학점</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label className="small">등급</Form.Label>
                  <Form.Select
                    size="sm"
                    value={subject.grade}
                    onChange={(e) => handleChange(index, 'grade', e.target.value)}
                  >
                    <option value="">선택</option>
                    <option value="A+">A+</option>
                    <option value="A0">A0</option>
                    <option value="B+">B+</option>
                    <option value="B0">B0</option>
                    <option value="C+">C+</option>
                    <option value="C0">C0</option>
                    <option value="D+">D+</option>
                    <option value="D0">D0</option>
                    <option value="F">F</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label className="small">구분</Form.Label>
                  <Form.Select
                    size="sm"
                    value={subject.type}
                    onChange={(e) => handleChange(index, 'type', e.target.value)}
                  >
                    <option value="">선택</option>
                    <option value="전공">전공</option>
                    <option value="교양">교양</option>
                    <option value="기타">기타</option>
                  </Form.Select>
                </Col>
              </Row>
            </div>
          ))}

          <div className="d-grid mb-3">
            <Button variant="outline-secondary" size="sm" onClick={handleAddSubject}>
              과목 추가 +
            </Button>
          </div>

          <div className="d-grid">
            <Button
              variant="primary"
              size="md"
              onClick={handleSubmit}
              disabled={!year || !semester || !studentId}
            >
              다음 단계로 →
            </Button>
          </div>
        </Card>
      </Container>

      <BottomNav />
    </>
  );
}

export default GradeInputPage;
