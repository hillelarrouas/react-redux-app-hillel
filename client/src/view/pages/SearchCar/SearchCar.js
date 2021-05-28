import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
// import { fetchCarNumber } from '../../../redux/actions/todoAction'
import TableCar from '../TableCar/TableCar'
import axios from 'axios';
import { Helmet } from 'react-helmet'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function SearchCar() {
    const dispatch = useDispatch()
    const { idCar } = useParams()
    const [ErrorMsg, setErrorMsg] = useState(true)
    const [dataCar, satDataCar] = useState([])

    useEffect(() => {
        if (idCar) {
            if (idCar.length === 0) {
                setErrorMsg(false)
            } else {
                if (!Number(idCar)) {
                    setErrorMsg(false)
                }
                else {
                    if (idCar.length < 7 || idCar.length > 8) {
                        setErrorMsg(false)
                    } else {

                        axios.post('https://car2car.herokuapp.com/getData', {
                            valueCarNumber: idCar
                        })
                            .then(res => {
                                satDataCar(res.data)
                            })
                            .catch(err => {
                                console.log(err)
                            })

                    }
                }
            }
        }
    }, [ErrorMsg])


    if (ErrorMsg) {
        return (
            <div>
                <Helmet>
                    <title>חיפוש רכב</title>
                </Helmet>
                <TableCar data={dataCar} />
            </div>
        )
    }
    else {
        return (
            <div style={{ textAlign: 'center', fontSize: '18px' }}>
                מספר רכב לא תקין <br /> <Link to="/cardSearchCar" className="linkRouterGetUsers">לחץ כאן כדי לחפש</Link>
            </div>
        )
    }
}

export default SearchCar
