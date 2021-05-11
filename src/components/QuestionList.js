import React from "react";
import QuestionOpt from "./QuestionOpt";

function QuestionList({ arrayQuestions, count, handleNext }) {
  return (
    <div className="question-wrapper">
      <ul>
        <li>{arrayQuestions[count].question}</li>
        <QuestionOpt
          arrayQuestions={arrayQuestions}
          arrayCounter={count}
          handleNext={handleNext}
        />
      </ul>
    </div>
  );
}

export default QuestionList;
