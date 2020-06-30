import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return (
    <>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.describe}</em></p>
    </>
  );
}

Market.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  describe: PropTypes.string
};
export default Market;