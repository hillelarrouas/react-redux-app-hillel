import React from 'react'
import './Question.css'
import { useHistory } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux'

function Question({ Answer }) {
    let history = useHistory();
    const state = useSelector(state => state)

    function answerTotal(num) {
        if (state.QuizzeReducer.indexAnswers.index.AnswerIndex === num){
            history.push("/Answer");
        }
        else{
            console.log(false)
        }
    }
    

    return (
        <div className="Question" onClick={() => answerTotal(Answer.indexAnswer)}>
            <div className="cardImg">
                <img src={Answer.img} alt="" />
            </div>
            <div className="titelAnswer">{Answer.Answer}</div>
            <div className="textAnswer">{Answer.text}</div>
        </div>
    )
}

export default Question
