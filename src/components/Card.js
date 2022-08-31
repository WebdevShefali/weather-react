import React from "react";
const Card = (props) => {
  const { title, description,image } = props;

  return (
    <>
    <div className="container">
      <img src={`http://openweathermap.org/img/w/${image}.png`} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  
    </>
  );
};

export default Card;
