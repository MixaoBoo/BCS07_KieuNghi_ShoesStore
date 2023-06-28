import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { content } = this.props;
    console.log("content: ", content);
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
            <div className="modal-header">
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
              <div className="container">
                <div className="row align-items-center w-100">
                  <div className="col-6 img-modal">
                    <img src={this.props.content.image} alt="" />
                  </div>
                  <div className="col-6 modal-detail">
                    <h2 className="productName">{this.props.content.name}</h2>
                    <h5 className="productPrice">
                      ${this.props.content.price}
                    </h5>
                    <p className="productQuantity">
                      Quantity <span>{this.props.content.quantity}</span>
                    </p>
                    <p className="productDescript">
                      {this.props.content.description}
                    </p>
                    <p className="productBrief">
                      {this.props.content.shortDescription}
                    </p>
                  </div>
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
              <button type="button" className="btn-add">
                <i className="fa-solid fa-circle-plus me-1"></i>
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
