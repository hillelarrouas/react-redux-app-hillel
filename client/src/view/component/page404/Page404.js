import './Page404.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function Page404() {
    return (
        <div className='page404'>דף 404 לא נמצא
            <div><Link to="/">לחץ כאן כדי לחזור לדף הבית</Link></div>
        </div>
    )
}

export default Page404
