import React, { useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { answersIndex } from '../../../redux/actions/todoAction'

// Component
import Box from '../Box/Box'

let totalRandom = 0

function HomePage() {
  const dispatch = useDispatch()
  const [Question, setQuestion] = useState([])
  const arrayQuestion = useSelector(state => state.QuizzeReducer.arrayQuizze.array)


  function getQuestion() {
    const random = Math.floor(Math.random() * arrayQuestion.length)

    if (totalRandom === random) {
      getQuestion()
    }
    else {
      totalRandom = random
      setQuestion(arrayQuestion[random])
      dispatch(answersIndex(arrayQuestion[random]))
    }
  }


  if (Question.Question) {
    return (
      <div className="App">
        <div style={{ padding: '10px' }}>
          <button className='getQuestion' onClick={getQuestion}>החלף שאלה</button>
          <Box QuestionState={Question} name='boxQuestion' />
        </div>
      </div>
    );
  }


  else {
    return (
      <div className="App">
        <div>
          <button className='getQuestion' onClick={getQuestion}>שאל שאלה</button>
        </div>
      </div>
    )
  }
}


export default HomePage