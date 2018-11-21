import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (<h3><Link to={`/advertisements/`}>Go to list of Advertisements</Link></h3>)
}