import React from 'react'
import './card.style.css'

export const Card = props => (
    <div className="card">
        <img
            className="mon-image"
            alt="mon"
            src={`https://robohash.org/${props.monsters.id}?set=set2`}
        />
        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>
)