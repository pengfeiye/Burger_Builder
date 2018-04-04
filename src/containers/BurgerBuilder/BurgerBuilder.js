import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControl from '../../components/Burger/BuildControl/BuildControl'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


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
      totalPrice: 5,
      purchasable: false,
      modal: false
  }

  updatePurchasableState = (ig) =>{
    const ingredients = {
      ...ig
    }
    let sum = 0

    for(let key in ingredients){
      sum += ingredients[key]
    }
    // const sum = Object.keys(ingredients)
    //             .map(ingredientKey => {
    //               return ingredients[ingredientKey]
    //             })
    //             .reduce((sum,curr)=> {return sum + curr}, 0);
    this.setState({purchasable:sum>0})
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
      totalPrice: newPrice,
    })

    this.updatePurchasableState(updatedIngredients);

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

    this.updatePurchasableState(updatedIngredients)
  }

  purchaseHandler =()=> {
    this.setState({modal: true})
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
        <Modal show={this.state.modal}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControl
          ingredientAdded={this.addIngredientHandler}
          ingredientDeleted={this.deleteIngredientHandler}
          disabled={disableInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          purchase={this.purchaseHandler}/>
      </Aux>
    )
  }
}

export default BurgerBuilder
