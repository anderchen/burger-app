import React, { Component } from "react";

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  }

  componentDidMount () {
    console.log(this.props)
    const query = new URLSearchParams(this.props.location.search);
    console.log(query)
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1]
    }
    console.log(ingredients)
    this.setState({ingredients: ingredients});
  } 

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render () {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        /> 
      </div>
    );
  }
}

export default Checkout;