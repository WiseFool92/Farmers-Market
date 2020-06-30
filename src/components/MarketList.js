import React from "react";
import Market from "./Market";
import PropTypes from "prop-types";

function MarketList(props) {
  return (
    <>
    <hr/>
    <h2>MarketList</h2>
    {props.marketList.map((market, index) => 
      <Market names = {market.name}
      location = {market.location}
      season = {market.season}
      describe = {market.describe}
      key = {index} />
      )}
    </>
  );
}

MarketList.propTypes = {
  marketList: PropTypes.array
};

export default MarketList;