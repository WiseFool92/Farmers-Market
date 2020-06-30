import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewMarketForm(props) {
  return (
    <>
      <form onSubmit={handleNewMarketFormSubmission}>
        <input 
          type='text'
          names='names'
          placeholder='Market Name' /><br/>
        <input
          type='text'
          name='location'
          placeholder='Location' /><br/>
        <input
          type='text'
          name='season'
          placeholder='season' /><br/>
        <textarea
          name='describe'
          placeholder='Describe your market.' /><br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );

  function handleNewMarketFormSubmission(event) {
    event.preventDefault();
    props.onNewMarketCreation({names: event.target.names.value, location: event.target.location.value, season: event.target.season.value, describe: event.target.describe.value, id: v4()});
  }
}

NewMarketForm.propTypes = {
  onNewMarketCreation: PropTypes.func
};

export default NewMarketForm;