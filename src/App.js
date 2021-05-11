import "./App.css";
import QuestionList from "./components/QuestionList";
import { useState } from "react";

function App() {
  const arrayQuestions = [
    {
      id: 1,
      question: "It is a JavaScript library used for building user interfaces.",
      optionsList: [
        { id: 1.1, option: "Java", isCorrect: false },
        { id: 1.2, option: "C++", isCorrect: false },
        { id: 1.3, option: "ReactJS", isCorrect: true },
        { id: 1.4, option: "Python", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What does the acronym CSS stands for?",
      optionsList: [
        { id: 2.1, option: "Cascading Sheets Style", isCorrect: false },
        { id: 2.2, option: "Casing Style Sheets", isCorrect: false },
        { id: 2.3, option: "Closing Shift Sheets", isCorrect: false },
        { id: 2.4, option: "Cascading Style Sheets", isCorrect: true },
      ],
    },
    {
      id: 3,
      question: "How do you end an HTML project?",
      optionsList: [
        { id: 3.1, option: "</html>", isCorrect: true },
        { id: 3.2, option: "<html>", isCorrect: false },
        { id: 3.3, option: "<br />", isCorrect: false },
        { id: 3.4, option: "</script>", isCorrect: false },
      ],
    },
  ];

  const [count, setCount] = useState(0);

  const [countCorrect, setCountCorrect] = useState(0);

  const handleNext = (e) => {
    setCount(count + 1);

    if (e.target.value === "true") {
      setCountCorrect(countCorrect + 1);
    } else {
      return countCorrect;
    }
  };

  const handleReset = () => {
    setCount(0);
    setCountCorrect(0);
  };

  return (
    <div className="App">
      {arrayQuestions.length > count ? (
        <QuestionList
          arrayQuestions={arrayQuestions}
          count={count}
          handleNext={handleNext}
        />
      ) : (
        <div className="try-again">
          <p>Your score is: {countCorrect}</p>
          <span>Try again?</span>
          <button onClick={handleReset}>Yes</button>
          <button>No</button>
        </div>
      )}
    </div>
  );
}
export default App;
