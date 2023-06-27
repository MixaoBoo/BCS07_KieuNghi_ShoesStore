import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { item } = this.props;
    console.log("item: ", item);
    return (
      <div
        className="modal"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="modalTitleId">
                Detail Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <img src={this.props.item.image} alt="" />
                </div>
                <div className="col-6">
                  <h2>{this.props.item.name}</h2>
                  <h5>${this.props.item.price}</h5>
                  <p>Quantity: {this.props.item.quantity}</p>
                  <p>{this.props.item.description}</p>
                  <p>{this.props.item.shortDescription}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                <i className="fa-solid fa-circle-plus me-2"></i>
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
