import React from 'react'
import PropTypes from 'prop-types'

//importing img dynamically
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
      <div className={classes.Logo}>
        <img src={burgerLogo} alt="Super Burger"/>
      </div>
)


export default logo
