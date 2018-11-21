import React from 'react'
import {Link} from 'react-router-dom'

// export default function AdvsList(props){
export default (props) => {
    if (props.adv === null) return 'Advertisement loading ...'
    console.log(props, 'props')
    console.log(props.adv, 'props.adv')
    return (
        <div>
            <h3>{props.adv.title}</h3>
            <p>Description: {props.adv.description}</p>
            <p>Picture (img url): {props.adv.picture}</p>
            <p>Price: {props.adv.price}</p>
            <p>Email: {props.adv.email}</p>
            <p>Phone: {props.adv.phone}</p>
            <Link to={`/advertisements`}>Go back to advertisements list</Link>
        </div>
    )
}