import React from "react";

const yesOrNoArray = ["Yes", "No"];

export const FourthQuestion = ({
  workInput,
  onWorkInputChange,
  nextQuestion,
  previousQuestion,
  step,
}) => {
  return (
    <main className="main-container">
      <button
        className="back-btn"
        aria-label="Go back"
        onClick={previousQuestion}
      >
        <span class="fas fa-arrow-left"></span>
      </button>
      <form className="form-container">
        <p className="question-number">Question {step}</p>
        <h2 className="question-heading">
          WORK LIFE: Did you feel appreciated at work today?
        </h2>
        {yesOrNoArray.map((yesOrNo) => (
          <div className="question-container">
            <label className="radio-input" key={yesOrNo} htmlFor={yesOrNo}>
              {/* prettier-ignore */}
              <input
            		className="radio-button"
								id={yesOrNo}
            		type="radio"
            		value={yesOrNo}
            		onChange={onWorkInputChange}
            		checked={yesOrNo === workInput}
          		/>
              {yesOrNo}
            </label>
          </div>
        ))}
      </form>
      <button
        className="next-btn"
        disabled={workInput === ""}
        onClick={nextQuestion}
      >
        Next
      </button>
    </main>
  );
};
