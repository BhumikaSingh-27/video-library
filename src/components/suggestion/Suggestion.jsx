import React from 'react'
import "./suggest.css"
import { NavLink } from 'react-router-dom'
const Suggestion = ({data}) => {
  return (
    <NavLink className="not-link" to={`/single/${data._id}`}><div className='suggest'>
        <div><img src={data.thumbnail} alt={data.title} /></div>
        <div> {data.title}</div>
        <div> {data.creator}</div>
    </div>
    </NavLink>
  )
}

export default Suggestion