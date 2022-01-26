import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  //console.log(questions[0]);
  const { question, correct_answer, incorrect_answers } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <main>
      {/*<Modal />*/}
      <section className="quiz">
        <p className="correct-answers">
          Correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((ans, index) => {
              return (
                <button
                  onClick={() => {
                    checkAnswer(ans === correct_answer);
                  }}
                  key={index}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: ans }}
                />
              );
            })}
          </div>
        </article>
        <button onClick={() => nextQuestion()} className="next-question">
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
