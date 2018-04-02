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
    <p>Current Pirce: <strong>$ {props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <Controller
        key={control.label}
        name={control.label}
        added={()=>props.ingredientAdded(control.type)}
        minus={()=>props.ingredientDeleted(control.type)}
        disabled={props.disabled[control.type]} />
    ))}
  </div>
)

export default buildControl
