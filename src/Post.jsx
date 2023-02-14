import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Post(props) {

    return (
        <div className="post-container">
            <div className="info-container">
                <h1>{props.title}</h1>
                <div className="date">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <p className="summary">{props.description}</p>
                <div className="location">
                    <div className="country-container">
                        <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
                        <p className="country">{props.location}</p>
                    </div>
                    <a href={props.url}>View on Google Maps</a>
                </div>
            </div>
            <div className="image-container">
                <img src={props.image}/>
            </div>
        </div>
    )
}