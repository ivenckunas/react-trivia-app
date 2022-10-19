import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [questionsArr, setQuestionsArr] = useState([])

  const questionRef = useRef();
  const correctAnswerRef = useRef();
  const answerOneRef = useRef();
  const answerTwoRef = useRef();
  const answerThreeRef = useRef();
  const answerFourRef = useRef();



  function addNewQuestionToArr() {
    const questionObj = {
      question: questionRef.current.value,
      answerOne: answerOneRef.current.value,
      answerTwo: answerTwoRef.current.value,
      answerThree: answerThreeRef.current.value,
      answerFour: answerFourRef.current.value,
      correctAnswer: correctAnswerRef.current.value
    }
    setQuestionsArr([...questionsArr, questionObj])

  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  console.log('currentQuestion ===', currentQuestion);

  function nextQuestion() {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questionsArr.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setGameOver(true)
    }
  }

  return (
    <div className="App">
      <div className="addQuestion">
        <input ref={questionRef} type="text" placeholder='Enter your question' />
        <input ref={answerOneRef} type="text" placeholder='answer 1' />
        <input ref={answerTwoRef} type="text" placeholder='answer 2' />
        <input ref={answerThreeRef} type="text" placeholder='answer 3' />
        <input ref={answerFourRef} type="text" placeholder='answer 4' />
        <input ref={correctAnswerRef} type="text" placeholder='Enter the correct answer' />
        <button onClick={addNewQuestionToArr}>Add Question</button>
        <p>Total questions: {questionsArr.length}</p>
      </div>

      <button>Start Quiz</button>
      {questionsArr.length > 0 ? (<div className="answerQuestion">
        <h2>Quiz</h2>
        <h3>Question {currentQuestion + 1} out of {questionsArr.length}</h3>
        <h3>{questionsArr[currentQuestion].question}</h3>
        <button onClick={nextQuestion}>{questionsArr[currentQuestion].answerOne}</button>
        <button onClick={nextQuestion}>{questionsArr[currentQuestion].answerTwo}</button>
        <button onClick={nextQuestion}>{questionsArr[currentQuestion].answerThree}</button>
        <button onClick={nextQuestion}>{questionsArr[currentQuestion].answerFour}</button>
      </div>) : (<div><h3>Add some questions to start</h3></div>)}

    </div>
  );
}

export default App;
