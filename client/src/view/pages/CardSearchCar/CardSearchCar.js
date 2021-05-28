import React, { useState } from 'react'
import './CardSearchCar.css'
import logo from '../../../img/logo1.png'
import { useHistory  } from 'react-router-dom'



function CardSearchCar() {
    const history = useHistory();
    const [inputSearchCar, setInputSearchCar] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    function ArrangeCarNumber(e) {
        let FixedCarNumber = e.target.value.replace(/-/g, '')
        if (FixedCarNumber.length === 3) {
            FixedCarNumber = FixedCarNumber.substring(0, 2) + "-" + FixedCarNumber.substring(2, 3)
        } else if (FixedCarNumber.length === 4) {
            FixedCarNumber = FixedCarNumber.substring(0, 2) + "-" + FixedCarNumber.substring(2, 4)
        } else if (FixedCarNumber.length === 5) {
            FixedCarNumber = FixedCarNumber.substring(0, 2) + "-" + FixedCarNumber.substring(2, 5)
        } else if (FixedCarNumber.length === 6) {
            FixedCarNumber = FixedCarNumber.substring(0, 2) + "-" + FixedCarNumber.substring(2, 5) + "-" + FixedCarNumber.substring(5, 6)
        } else if (FixedCarNumber.length === 7) {
            FixedCarNumber = FixedCarNumber.substring(0, 2) + "-" + FixedCarNumber.substring(2, 5) + "-" + FixedCarNumber.substring(5, 7)
        } else if (FixedCarNumber.length === 8) {
            FixedCarNumber = FixedCarNumber.substring(0, 3) + "-" + FixedCarNumber.substring(3, 5) + "-" + FixedCarNumber.substring(5, 8)
        }
        setInputSearchCar(FixedCarNumber)
    }


    function submitformSearchCar(e) {
        e.preventDefault()
        let nameInputSearchCar = e.target.children.nameInputSearchCar.value
        nameInputSearchCar = nameInputSearchCar.replace(/-/g, '')

        if (nameInputSearchCar.length === 0) {
            setErrorMsg('נא להקליד מספר רכב')
        } else {
            if (!Number(nameInputSearchCar)) {
                setErrorMsg('נא להזין מספר רכב בספרות בלבד')
            }
            else {
                if (nameInputSearchCar.length < 7 || nameInputSearchCar.length === undefined) {
                    setErrorMsg('נא להזין מספר רכב בין 7 או 8 ספרות')
                } else {

                    history.push(`/SearchCar/${nameInputSearchCar}`)
                }
            }
        }
    }


    return (
        <div className='CardSearchCar'>
            <div className="cardLogo">
                <img className='logo' src={logo} alt="" />
            </div>
            <div className="text">הקלד מספר רכב</div>
            <div id="rtl">
                <form onSubmit={submitformSearchCar}>
                    <input id="WelcomCarNumber" dir="ltr" maxLength="10" type="tel" autoComplete="off"  value={inputSearchCar} name='nameInputSearchCar'  onChange={ArrangeCarNumber}/>
                    <button id="WelcomBt" type="sbmit" className="Bt">המשך</button>
                </form>
                <div id="ErrorMsg">{errorMsg}</div>
            </div>
        </div>
    )
}

export default CardSearchCar