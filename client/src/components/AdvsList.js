import React from 'react' //react must in scope
import { Link } from 'react-router-dom'

export default function AdvsList(props) {
    if (props.advs === null) return <h2>Loading ...</h2>
    //now our advs is in props => props.advs, kind of array
    console.log(props, 'props')
    console.log(props.advs, 'props.advs')
    return (
        <div>
            {props.advs.map(adv => {
                return <li key={adv.id}>
                    <Link to={`/advertisements/${adv.id}`}>{adv.title}</Link>
                </li>
            })}
        </div>
    )
}