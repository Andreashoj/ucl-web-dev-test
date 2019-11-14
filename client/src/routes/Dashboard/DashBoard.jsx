import React from "react";
import styled from "styled-components";
import List from "../../components/List/List";
import Heading from "../../components/Heading/Heading";
import Form from "../../components/Form/Form";

// Heading component mangler
// User component I Heading
// List WIP.. (tobias)

const DashBoard = () => {
  return (
    <div className="mainWrapper">
      <Heading />
      <List />
    </div>
  );
};

export default DashBoard;
