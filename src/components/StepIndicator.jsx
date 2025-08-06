import React from 'react';

function StepIndicator({ step }) {
  const steps = [1, 2, 3];

  return (
    <div className="d-flex align-items-center justify-content-center mb-4" style={{ gap: '12px' }}>
      {steps.map((s, index) => (
        <React.Fragment key={s}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: s <= step ? '#3e3e9aff' : '#dee2e6',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: 14,
              zIndex: 1,
            }}
          >
            {s}
          </div>
          {index < steps.length - 1 && (
            <div
              style={{
                width: 24,
                height: 2,
                backgroundColor: '#dee2e6',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default StepIndicator;
