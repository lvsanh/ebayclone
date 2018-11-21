import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function Home(props) {
  return (
      <div>
      <Button variant="contained" color="white"><Link to={`/advertisements/`}>Go to list of Advertisements</Link></Button>
      </div>

      )
}