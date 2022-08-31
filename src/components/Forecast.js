import React from 'react'

const Forecast = (props) => {
    const {title, description, date,foreTemperature,imageIcon} = props;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = days[d.getDay()];


  return (
    <>
 
    <div className='forecastCard'>
   
    <div ><p style={{fontFamily: "Aboreto, cursive", fontSize:"2rem",textDecoration:"underline"}}>{dayName}</p>
    </div>
<div> <h1>{foreTemperature} °C</h1>
<img src={`http://openweathermap.org/img/w/${imageIcon}.png`} alt="" />
<h2>{title}</h2>
      <p>{description}</p></div>
   
    </div>

    </>
  )
}

export default Forecast
