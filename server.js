const express = require('express')
const path = require('path')
const app = express();


app.use(express.static(path.join(__dirname + 'client/build')));


const array = [
    {
        Question: 'מי מהבאים לא השתתף בשיר ״שבט אחים ואחיות״?',
        AnswerIndex: 2,
        Answer: [{
            Answer: 'דודו אהרון',
            text: 'טקסט טקסט',
            indexAnswer: 1,
            img: 'https://picsum.photos/id/300/200',
            NumberOfClicks: 1
        },
        {
            Answer: 'עומר אדם',
            text: 'טקסט טקסט',
            indexAnswer: 2,
            img: 'https://picsum.photos/300/200',
            NumberOfClicks: 0
        },
        ]
    },
    {
        Question: 'כמה חיילים רגילים בסך הכל (שחורים ולבנים) משתתפים במשחק שחמט?',
        AnswerIndex: 1,
        Answer: [{
            Answer: '16',
            text: 'טקסט טקסט',
            indexAnswer: 1,
            img: 'https://picsum.photos/id/300/200',
            NumberOfClicks: 1
        },
        {
            Answer: '8',
            text: 'טקסט טקסט',
            indexAnswer: 2,
            img: 'https://picsum.photos/300/200',
            NumberOfClicks: 10
        }
        ]
    }
]




app.get('/getshalot', (req, res) => {
    res.send({ array })
})


const port = process.env.PORT || 4000;
app.listen(port, () => { console.log('server listen on port', port) })