import React from "react";

// Child Component (Deeply Nested)
const ChildComponent = ({ message }) => {
  return <h2>{message}</h2>;
};

// Intermediate Component
const IntermediateComponent = ({ message }) => {
  return <ChildComponent message={message} />;
};

// Parent Component
const ParentComponent = () => {
  const message = "Hello from Parent!";
  return <IntermediateComponent message={message} />;
};

export default ParentComponent;
