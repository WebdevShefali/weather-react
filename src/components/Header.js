import React, { useEffect } from "react";

const Header = () => {
  const getTime = () => {
    var today = new Date();
    var hr = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    var time = hr + ":" + m + ":" + s;
    if (hr >= 0 && hr < 12) {
      document.getElementById("heading").textContent = "Good Morning!";
    } else if (hr === 12) {
      document.getElementById("heading").textContent = "Good Noon!";
    } else if (hr >= 12 && hr <= 17) {
      document.getElementById("heading").textContent = "Good Afternoon!";
    } else {
      document.getElementById("heading").textContent = "Good Evening!";
    }
    document.getElementById("time").innerText = time ;
    setTimeout(getTime, 1000);
  };
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
  useEffect(() => {
    getTime();
     // eslint-disable-next-line
  },[]);
  return (
    <div className="header">
      <div id="heading"></div>
      <div id="time"></div>
    </div>
  );
};

export default Header;
