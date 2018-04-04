import React from 'react'
import PropTypes from 'prop-types'

//importing img dynamically
import burgerLogo from '../../assets/images/burgerLogo'

const logo = (props) => (
      <div>
        <img src={burgerLogo} alt="Super Burger"/>
      </div>
)


export default logo
