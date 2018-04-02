import React from 'react'
import classes from './Controller.css'

const controller = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.name}</div>
    <button
      onClick={props.added}
      className={classes.More}>+</button>
    <button
      onClick={props.minus}
      disabled={props.disabled}
      className={classes.Less}>-</button>
  </div>
)

export default controller
