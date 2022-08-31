import React from 'react'

const Temp = (props) => {
    const {temp, humidity, windSpeed, name} = props;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    var date = d.getDate()+ "/" + d.getMonth() + "/"+ d.getFullYear();
  return (
    <div className='weather1'>
 
    <h5>{date},  {dayName}</h5>
    <h1>{name}</h1>

  <p className='temp'>{temp} °C</p>
     <p>Humidity: {humidity} %</p>
     <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  )
}

export default Temp;
