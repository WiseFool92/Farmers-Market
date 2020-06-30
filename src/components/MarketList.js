import React from "react";
import Market from "./Market";
import PropTypes from "prop-types";

function MarketList(props) {
  return (
    <>
    <hr/>
    {props.marketList.map((market, index) => 
      <Market names = {market.name}
      location = {market.location}
      issue = {market.issue}
      key = {index} />
      )}
    </>
  );
}

MarketList.propTypes = {
  marketList: PropTypes.array
};

export default MarketList;