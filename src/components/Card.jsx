import React from "react";
import "../styles/Card.css"



const Card = (props) => {
    return (
        <div>
            <div className="card">
                <img src={props.photo} className="poster"/>

                <div className="ticket">
                    <h3 className="title">
                        {props.title}
                    </h3>
                    <p className="premise">
                        {props.premise}
                    </p>
                    <p className="release-date">
                        Release Date : {props.release}
                    </p>
                    <div className="ticket-bottom">
                        <a href={props.trailer} className="trailer-btn">Watch Trailer!
                        </a>
                    </div>    
                </div>
            </div>
        </div>

    )
}

export default Card;