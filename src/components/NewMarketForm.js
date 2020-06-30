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
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>

    </>
  );

  function handleNewMarketFormSubmission(event) {
    event.preventDefault();
    props.onNewMarketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }
}

NewMarketForm.propTypes = {
  onNewMarketCreation: PropTypes.func
};

export default NewMarketForm;