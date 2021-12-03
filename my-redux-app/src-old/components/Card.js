import React from 'react'
import Badge from './Badge'
import './Card.css';

export default function Card(props) {


    // const myStyle = {width: '18rem'}
    

    return (
        <div className="card card-width">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.summary}</p>
            <Badge caption="Votes"></Badge>
            <button onClick={()=> props.courseDeleted(props.idx)} className="btn btn-danger"> X </button>
        </div>
        </div>
    )
}
