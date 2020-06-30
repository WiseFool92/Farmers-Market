import React from "react";
import NewMarketForm from "./NewMarketForm";
import MarketList from "./MarketList";

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMarketList: []
    };
    // this.handleClick = this.handleClick.bind(this); // Only needed for binding if an arrow function isnt used
  }
  handleAddingNewMarketToList = (newMarket) => {
    const newMasterMarketList = this.state.masterMarketList.concat(newMarket);
    this.setState({
      masterMarketList: newMasterMarketList,
      formVisbleOnPage: false 
    });
  }
  handleClick = () => {
    console.log("Inside handleClick");
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  render(){
    console.log(this.state.formVisibleOnPage);
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      console.log("setting display to NewMarketForm")
      currentlyVisibleState = <NewMarketForm onNewMarketCreation={this.handleAddingNewMarketToList} />;
      buttonText = "Return to Market List";
    } else {
      currentlyVisibleState = <MarketList marketList={this.state.masterMarketList} />;
      buttonText = "Add Market";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MarketControl;