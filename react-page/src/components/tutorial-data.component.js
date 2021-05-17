import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tutorialdatacomponent extends Component {
  render() {
    return (
      <div>
        <h4>Tutorial Details</h4>
        <div>
          <label>
            <strong>Title:</strong>
          </label>{" "}
          {this.props.currentTutorial.title}
        </div>
        <div>
          <label>
            <strong>Description:</strong>
          </label>{" "}
          {this.props.currentTutorial.description}
        </div>
        <div>
          <label>
            <strong>Status:</strong>
          </label>{" "}
          {this.props.currentTutorial.published ? "Published" : "Pending"}
        </div>

        <Link
          to={"/tutorials/" + this.props.currentTutorial.id}
          className="badge badge-warning"
        >
          Edit
        </Link>
      </div>
    );
  }
}
