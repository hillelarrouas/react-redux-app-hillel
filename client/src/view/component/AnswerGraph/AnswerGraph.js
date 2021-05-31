import React, { useState, useEffect } from 'react'
import './AnswerGraph.css'

function AnswerGraph({ Answer, numberGrf }) {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        for (let i = 0; i <= numberGrf; i++) {
            setTimer(i)
        }
    }, [])


    return (
        <div className='cardAnswerGraph'>
            <div className="cardImgAnswer">
                <img src={Answer.img} />
            </div>
            <div className='Graph'>
                <div className="numVotes">
                    <h1>{timer}%</h1>
                    <div>{Answer.NumberOfClicks} הצבעות</div>
                </div>
                <div className='bordergraf'>
                    <div className='colorgraf' style={{ width: timer + '%' }}></div>
                </div>
                <div className='textAnswer'>תשובה: {Answer.Answer}</div>
            </div>
        </div>
    )
}

export default AnswerGraph
