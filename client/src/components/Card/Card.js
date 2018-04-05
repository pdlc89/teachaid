import React from "react";
import "./Card.css";

const Card = props => (

        <div className="card" style={{width: 250}}>
            <h3 className="card-header text-center">
            {props.date}
            </h3>
            <p>6th Grade: {props.g6}</p>
            <p>7th Grade: {props.g7}</p>
            <p>8th Grade: {props.g8}</p>
            <p>Char Counts: {props.cc}</p>
        </div>

)
// class Card extends React.Component {

//     render() {
//         return (
//             <div className="card-div">
//                 <div className="card">
//                     {...props}
//                 </div>
//             </div>
//         );
//     }
// }


export default Card;
