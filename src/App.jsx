import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((steps) => steps - 1);
  }

  function handleNext() {
    if (step < 3) setStep((steps) => steps + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : " "}>1</div>
            <div className={step >= 2 ? "active" : " "}>2</div>
            <div className={step >= 3 ? "active" : " "}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button textcolor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button textcolor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// This is How to Use Children prop

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>STEP {step}</h3>
      {children}
    </div>
  );
}

function Button({ textcolor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
