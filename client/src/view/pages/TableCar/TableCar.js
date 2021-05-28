import React from 'react'
import './TableCar.css'


function TableCar({ data }) {
    console.log(data[2])

    if (data[0]) {
        return (
            <div>
                <div dir="rtl" style={{textAlign: 'center',fontSize: 'x-large',padding: '10px 0',fontWeight: '600',textShadow:'2px 2px 9px rgb(254 250 220)'}}><div style={{display:'inline-block'}}>{data[1].tozar}</div> | <div style={{display:'inline-block'}}>{data[0].kinuy_mishari}</div> | <div style={{display:'inline-block'}}>{data[0].shnat_yitzur}</div></div>
                <table>
                <tbody>
    <tr>
        <td className="key">מספר רכב</td>
        <td>{data[0].mispar_rechev}</td>
    </tr>
   <tr>
        <td className="key">נפח מנוע</td>
        <td><div style={{direction: 'rtl'}}>{data[1].nefah_manoa} סמ"ק</div></td>
    </tr>
    <tr>
        <td className="key">כח סוס</td>
        <td><div style={{direction: 'rtl'}}>{data[1].koah_sus} כ"ס</div></td>
    </tr>
    <tr>
        <td className="key">הנעה</td>
        <td>{data[1].hanaa_nm}</td>
    </tr>
    <tr>
        <td className="key">רמת גימור</td>
        <td>{data[0].ramat_gimur}</td>
    </tr>
    <tr>
        <td className="key">משקל כולל</td>
        <td style={{direction: 'rtl'}}>{data[1].mishkal_kolel} ק"ג</td>
    </tr>
    {/*  
    <td className="key">
        <div style={{display: 'inline-flex'}}>
                            יחס משקל לכ"ס<br />
            <div className="popup" onmouseover="koah_sus_help()" onmouseout="koah_sus_help()">
                                ?<span className="popuptext" id="myPopup">המספר מייצג את המשקל לכל כ״ס בודד. ככל שיחס המשקל נמוך, כך התאוצה טובה יותר.</span>
            </div>
        </div>
    </td>
    </tr>
    */}
    <tr>
    <td className="key">יחס משקל לכ"ס</td>
    <td><div>{(parseFloat(data[1].mishkal_kolel) / data[1].koah_sus).toFixed(1)}</div></td>
    </tr>
    <tr>
        <td className="key">תיבת הילוכים</td>
        <td>{data[1].automatic_ind === 1 ? 'אוטומטי' : 'ידני'}</td>
    </tr>
    </tbody>
</table>

<div style={{textAlign: 'right',padding: '5px 20px',fontSize: '22px',fontWeight: '600'}}>אבזור ובטיחות:</div>

<table>
<tbody>
    <tr>
        <td className="key">רמת איבזור בטיחות</td>
        <td>{data[1].ramat_eivzur_betihuty}</td>
    </tr>
    
    <tr>
        <td className="key">מספר כריות אוויר</td>
        <td>{data[1].mispar_kariot_avir}</td>
    </tr>
    <tr>
        <td className="key">ABS</td>
        <td>{data[1].abs_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">חלון בגג</td>
        <td>{data[1].halon_bagg_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">הגה כח</td>
        <td>{data[1].hege_koah_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>

    <tr>
        <td className="key">בקרת יציבות</td>
        <td>{data[1].bakarat_yatzivut_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
     
    <tr>
        <td className="key">בקרת סטיה מנתיב</td>
        <td>{data[1].bakarat_stiya_menativ_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">ניתור מרחק מלפנים</td>
        <td>{data[1].nitur_merhak_milfanim_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">זיהוי שטח מת</td>
        <td>{data[1].zihuy_beshetah_nistar_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">בקרת שיוט אדפטיבית</td>
        <td>{data[1].bakarat_shyut_adaptivit_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">זיהוי הולכי רגל</td>
        <td>{data[1].zihuy_holchey_regel_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">מצלמת רוורס מהיצרן</td>
        <td>{data[1].matzlemat_reverse_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">חיישני לחץ אוויר בצמיגים</td>
        <td>{data[1].hayshaney_lahatz_avir_batzmigim_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    
    <tr>
        <td className="key">חיישני חגורות בטיחות</td>
        <td>{data[1].hayshaney_hagorot_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">תאורה אוטומטית בנסיעה קדימה</td>
        <td>{data[1].teura_automatit_benesiya_kadima_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">שליטה אוטומטית באורות גבוהים</td>
        <td>{data[1].shlita_automatit_beorot_gvohim_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">זיהוי תמרורי תנועה</td>
        <td>{data[1].zihuy_tamrurey_tnua_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    <tr>
        <td className="key">זיהוי התקרבות מסוכנת</td>
        <td>{data[1].zihuy_matzav_hitkarvut_mesukenet_ind === 0 ? 'אין' : 'יש'}</td>
    </tr>
    </tbody>
</table>

<div style={{textAlign: 'right',padding: '5px 20px',fontSize: '22px',fontWeight: '600'}}>מידע נוסף:</div>

<table>
<tbody>
    <tr>
        <td className="key">מספר דלתות</td>
        <td>{data[1].mispar_dlatot}</td>
    </tr>
    <tr>
        <td className="key">מספר מושבים</td>
        <td>{data[1].mispar_moshavim}</td>
    </tr>
    <tr>
        <td className="key">קוד תוצר</td>
        <td>{data[0].tozeret_cd}</td>
    </tr>
    <tr>
        <td className="key">קוד דגם</td>
        <td>{data[0].degem_manoa}</td>
    </tr>
    <tr>
        <td className="key">קוד דגם</td>
        <td>{data[0].degem_cd}</td>
    </tr>
    <tr>
        <td className="key">שם דגם</td>
        <td>{data[0].degem_nm}</td>
    </tr>
    <tr>
        <td className="key">קבוצת זיהום</td>
        <td>{data[0].kvutzat_zihum}</td>
    </tr>
    <tr>
        <td className="key">מבחן טסט אחרון</td>
        <td><div style={{direction: 'ltr'}}>{data[0].mivchan_acharon_dt.split('T')[0].replace(/-/g, '/')}</div></td>
    </tr>
    <tr>
        <td className="key">תוקף טסט</td>
        <td><div style={{direction: 'ltr'}}>{data[0].tokef_dt.split('T')[0].replace(/-/g, '/')}</div></td>
    </tr>
    <tr>
        <td className="key">מספר שילדה</td>
        <td>{data[0].misgeret}</td>
    </tr>
    <tr>
        <td className="key">צבע רכב</td>
        <td>{data[0].tzeva_rechev}</td>
    </tr>
    <tr>
        <td className="key">מידות צמיג קידמי</td>
        <td>{data[0].zmig_kidmi}</td>
    </tr>
    <tr>
        <td className="key">מידות צמיג אחורי</td>
        <td>{data[0].zmig_ahori}</td>
    </tr>
    <tr>
        <td className="key">סוג דלק</td>
        <td>{data[0].sug_delek_nm}</td>
    </tr>
    <tr>
        <td className="key">הוראת רשום</td>
        <td>{data[0].horaat_rishum}</td>
    </tr>
    <tr>
        <td className="key">קוד צבע</td>
        <td>{data[0].tzeva_cd}</td>
    </tr>
    
    <tr>
        <td className="key">בעלות</td>
        <td>{data[0].baalut}</td>
    </tr>
    
   {data[2] === null ? 
   <tr>
        <td className="key">תו נכה</td>
        <td>אין</td>
      </tr>
      : 
      <>
      <tr>
        <td className="key">תו נכה - סוג תו</td>
            <td>{data[2]['SUG TAV'] === '01' ? 'תו נכה רגיל' : 'תג נכה על כיסא גלגלים'}</td>
            </tr>
       <tr>
            <td className="key">תאריך הפקת תו</td>
            <td>{data[2]['TAARICH HAFAKAT TAG'][6]}{data[2]['TAARICH HAFAKAT TAG'][7]}/{data[2]['TAARICH HAFAKAT TAG'][4]}{data[2]['TAARICH HAFAKAT TAG'][5]}/{data[2]['TAARICH HAFAKAT TAG'][0]}{data[2]['TAARICH HAFAKAT TAG'][1]}{data[2]['TAARICH HAFAKAT TAG'][2]}{data[2]['TAARICH HAFAKAT TAG'][3]}</td>
       </tr></>
       }
    </tbody>
</table>
            </div >
        )
    }
    else {
        return (<div>
            רגעעעעעעעעעעעעעעעעעעעעעעעעעע..................
        </div>)
    }
}
export default TableCar
