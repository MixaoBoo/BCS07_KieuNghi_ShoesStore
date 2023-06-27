import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ProductItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <div className="card text-black mb-4" style={{ height: "480px" }}>
        <img className="card-img-top" src={item.image} alt="Title" />
        <div className="card-body d-flex flex-column justify-content-end">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">${item.price}</p>

          <NavLink to={`/detail/${item.id}`}>
            <button
              data-bs-toggle="modal"
              data-bs-target="#modalId"
              className="btn-cart"
              onClick={() => this.props.handleGetStateModal(item)}
            >
              ADD TO CART <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
