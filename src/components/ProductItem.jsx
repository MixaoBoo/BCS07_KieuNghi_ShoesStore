import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <div
        className="card text-black mb-4"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => this.props.setStateModal(item)}
        style={{ height: "480px", cursor: "pointer" }}
      >
        <div className="img-container">
          <img className="card-img-top" src={item.image} alt="Title" />
        </div>

        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">${item.price}</p>
          <button className="btn-cart">
            ADD TO CART <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    );
  }
}
