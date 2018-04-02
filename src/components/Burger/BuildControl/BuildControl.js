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
  <div className={classes.BuildControls}>
    {controls.map(control => (
      <Controller
        key={control.label}
        name={control.label}
        added={()=>props.ingredientAdded(control.type)}
        minus={()=>props.ingredientDeleted(control.type)} />
    ))}
  </div>
)

export default buildControl
