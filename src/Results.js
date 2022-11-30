import React from 'react'

function Results({cockTailName, ingredients}) {
  return (
    <div>
      <label>{cockTailName}</label>
    {ingredients.map(p => (
      <ul key={p}>
        <li key={p}>{p}</li>
      </ul>
    ))}
    </div>
  )
}

export default Results
