import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
    return <li key={igKey+props.ingredients[igKey]}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} </li>
  })
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button clicked={props.clearModal} btnType='Danger'>CANCEL</Button>
      <Button btnType='Success'>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;
