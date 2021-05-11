import React from "react";

function QuestionOpt({ arrayQuestions, arrayCounter, handleNext }) {
  return (
    <div className="question">
      {arrayQuestions[arrayCounter].optionsList.map((opt) => (
        <div className="question-wrapper">
          <button
            id="btnQuestion"
            key={opt.id}
            value={opt.isCorrect}
            onClick={handleNext}
          >
            {opt.option}
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuestionOpt;
