import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let renderProductList = this.props.productsData.map((item, index) => {
      return (
        <div className="col-4 gap-3" key={index}>
          <ProductItem
            item={item}
            handleGetStateModal={this.props.handleGetStateModal}
          />
        </div>
      );
    });
    return <div className="row">{renderProductList}</div>;
  }
}
