// src/contexts/CreditContext.js
import React, { createContext, useContext, useState } from 'react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [studentId, setStudentId] = useState('');
  const [studentYear, setStudentYear] = useState('');
  const [studentSemester, setStudentSemester] = useState('');
  const [subjects, setSubjects] = useState([]);

  return (
    <CreditContext.Provider
      value={{
        studentId,
        setStudentId,
        studentYear,
        setStudentYear,
        studentSemester,
        setStudentSemester,
        subjects,
        setSubjects,
      }}
    >
      {children}
    </CreditContext.Provider>
  );
};

export const useCredit = () => useContext(CreditContext);
