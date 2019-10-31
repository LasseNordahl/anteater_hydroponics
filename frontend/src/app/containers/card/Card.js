import React from "react";
import './Card.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faThermometerEmpty, faCloud, faTint } from '@fortawesome/free-solid-svg-icons';

function getIcon(title) {
  if (title === "Light Sensor") {
    return faLightbulb; 
  } if (title === "Humidity Sensor") {
    return faCloud;
  } if (title === "Water Levels") {
    return faTint;
  } if (title === "Temperature Sensor") {
    return faThermometerEmpty;
  }
  return null;
}

function Card(props) {
  return (
    <div className={props.className + " Card box-shadow"} style={props.style}>
      <div>
        <div className="card-header">
          <FontAwesomeIcon icon={getIcon(props.title)}/> 
          <h3>
            {props.title}
          </h3>
        </div>
       
        {props.children}
      </div>
    </div>
  );
}

export default Card;
