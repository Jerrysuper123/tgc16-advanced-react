import React from "react";
import ProductContext from "./ProductContext";

export default class AddProduct extends React.Component {
  //set the context to use for class component to use
  static contextType = ProductContext;

  state = {
    product_name: "",
    cost: 0,
  };

  onUpdateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onAddProduct = () => {
    this.context.addProduct(this.state.product_name, this.state.cost);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Product name:</label>
          <input
            type="text"
            name="product_name"
            value={this.state.product_name}
            onChange={this.onUpdateFormField}
          />
        </div>

        <div>
          <label>Cost</label>
          <input
            type="text"
            name="cost"
            value={this.state.cost}
            onChange={this.onUpdateFormField}
          />
        </div>
        <button onClick={this.onAddProduct}>Add Product</button>
      </React.Fragment>
    );
  }
}
