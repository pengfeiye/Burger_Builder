import React from 'react'
import classes from './BuildControl.css'
import Controller from './Controller/Controller'

const controls = [
  {label: 'Salad', type:'salad'},
  {label: 'Cheese', type:'cheese'},
  {label: 'Meat', type:'meat'},
  {label: 'Bacon', type:'bacon'}
]
const buildControl = (props) => (
  <div class={classes.BuildControl}>
    {controls.map(control => (
      <Controller key={control.label} name={control.label} type={control.type} />
    ))}
  </div>
)

export default buildControl
