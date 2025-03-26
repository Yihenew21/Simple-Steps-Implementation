const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;
  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div classNmae={` ${step >= 1 ? "active" : ""} `}>1</div>
          <div classNmae={` ${step >= 2 ? "active" : ""} `}>2</div>
          <div classNmae={` ${step >= 3 ? "active" : ""} `}>3</div>
        </div>
        <p className="message">
          {" "}
          step {step} : {messages[step - 1]}
        </p>
        <div className="buttons">
          <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
            Previous
          </button>
          <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
