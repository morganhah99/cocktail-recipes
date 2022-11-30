import React from 'react'
import './Results.css'

function Results({ingredients}) {
  return (
    <div className='results'>
      <label className='title'>Ingredients</label>
    {ingredients.map(p => (
      <ul key={p}>
        <li key={p}>{p}</li>
      </ul>
    ))}
    <label className='title'>Instructions</label>
    </div>
  )
}

export default Results
