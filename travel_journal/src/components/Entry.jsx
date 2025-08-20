import App from "../App"
import React from "react"
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="https://img.freepik.com/free-vector/location_53876-25530.jpg?semt=ais_hybrid&w=740&q=80" 
                    alt="map marker icon"  width={[15]}
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}