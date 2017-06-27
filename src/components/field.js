import React from 'react'

export default function Field ({

  value, //what the user has entered
  label
}) {
  return (
    <label className="flex-row">
    {label}
    {' '}
      <input value={ value } />
    </label>
  )
}
