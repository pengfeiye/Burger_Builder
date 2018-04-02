import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControl from '../../components/Burger/BuildControl/BuildControl'


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese:1,
  bacon:1,
  meat:2,
};

class BurgerBuilder extends Component {

  state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat:0
      },
      totalPrice: 5
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })

  };

  deleteIngredientHandler = (type) => {
    if(this.state.ingredients[type] <= 0) {
      return
    }
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
  }

  render () {
    const disableInfo = {
      ...this.state.ingredients
    }

    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControl
          ingredientAdded={this.addIngredientHandler}
          ingredientDeleted={this.deleteIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}/>
      </Aux>
    )
  }
}

export default BurgerBuilder
