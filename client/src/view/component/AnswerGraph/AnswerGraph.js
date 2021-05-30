import React from 'react'
import './AnswerGraph.css'

function AnswerGraph({Answer,numberGrf}) {

    return (
        <div className='cardAnswerGraph'>
            <div className="cardImgAnswer">
                <img src={Answer.img} />
            </div>
            <div className='Graph'>
                <div className="numVotes">
                    <h1>{numberGrf}%</h1>
                    <div>{Answer.NumberOfClicks} הצבעות</div>
                </div>
                <div className='bordergraf'>
                    <div className='colorgraf' style={{ width: numberGrf+'%' }}></div>
                </div>
                <div className='textAnswer'>תשובה: {Answer.Answer}</div>
            </div>
        </div>
    )
}

export default AnswerGraph
