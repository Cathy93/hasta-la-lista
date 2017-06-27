import React from 'react'
import Checkbox from './checkbox'
import Field from './field'

export default function TodoItem({
  description,
  completed

}) {
  return (
      <div className='mb-3'>
        <Checkbox checked={ completed } />
        <Field value={ description } />
      </div>
  )
}
