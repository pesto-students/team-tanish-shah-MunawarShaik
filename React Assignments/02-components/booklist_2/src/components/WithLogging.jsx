import React, { Component } from "react";

// Higher Order Component
function WithLogging(WrappedComponent) {
  return class extends Component {
    render() {
      console.log("Rendering BookList...");
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithLogging;
