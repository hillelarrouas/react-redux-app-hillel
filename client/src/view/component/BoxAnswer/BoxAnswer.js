import React from 'react'
import './BoxAnswer.css'
import { useSelector } from 'react-redux'
import AnswerGraph from '../AnswerGraph/AnswerGraph'
import Page404 from '../page404/Page404'
import { useHistory } from "react-router-dom";



function BoxAnswer() {
    let history = useHistory();
    const arrayQuestion = useSelector(state => state.QuizzeReducer.indexAnswers.index)


    if (arrayQuestion) {
        const numberGrafTop =  Math.round(arrayQuestion.Answer[0].NumberOfClicks / (arrayQuestion.Answer[0].NumberOfClicks + arrayQuestion.Answer[1].NumberOfClicks) * 100)
        const numberGrafButtom = Math.round(arrayQuestion.Answer[1].NumberOfClicks / (arrayQuestion.Answer[0].NumberOfClicks + arrayQuestion.Answer[1].NumberOfClicks) * 100)


        const randomColor = '#' + Math.random().toString(16).substr(-6);
        return (
            <div className="BoxAnswer">
                <div className='Box'>
                    <div className="titelQuestion" style={{ background: randomColor }}>{arrayQuestion.Question}</div>
                    <AnswerGraph Answer={arrayQuestion.Answer[0]} numberGrf={numberGrafTop} />
                    <AnswerGraph Answer={arrayQuestion.Answer[1]} numberGrf={numberGrafButtom} />
                </div>
            </div>
        )
    }
    else {
        history.push("/");
        return (
            <Page404 />
        )
    }
}

export default BoxAnswer