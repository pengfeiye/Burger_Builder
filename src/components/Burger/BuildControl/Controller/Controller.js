import React from 'react'
import classes from './Controller.css'

const controller = (props) => (
  <div class={classes.BuildControl}>
    <div class={classes.Label}>{props.name}</div>
    <button class={classes.More}>+</button>
    <button class={classes.Less}>-</button>
  </div>
)

export default controller
