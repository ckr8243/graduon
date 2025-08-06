import React from 'react';

function StepIndicator({ step }) {
  const steps = [1, 2, 3];
  return (
    <div className="d-flex justify-content-center gap-3 mb-4">
      {steps.map((s) => (
        <div
          key={s}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: s === step ? '#0d6efd' : '#dee2e6',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          {s}
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;
