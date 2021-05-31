import React from 'react'
import './Box.css'
import Question from '../Question/Question'
// import { useSelector } from 'react-redux'



function Box({ QuestionState}) {
    // const randomColor = '#' + Math.random().toString(16).substr(-6);


        return (
            <div className='Box'>
                <div className="titelQuestion">{QuestionState.Question}</div>
                <div style={{ marginTop: '13px', display: "flex", justifyContent: 'space-between' }}>


                    {QuestionState.Answer.map((elm, index) => {
                        return (
                            <Question Answer={elm} key={index} />
                        )
                    })}
                </div>
            </div>
        )

}

export default Box
