import React from 'react'
import classes from './Controller.css'

const controller = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.name}</div>
    <button className={classes.More}>+</button>
    <button className={classes.Less}>-</button>
  </div>
)

export default controller
