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
          placeholder='Market Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='describe'
          placeholder='Describe your market.' />
        <button type='submit'></button>
      </form>

    </>
  );

  function handleNewMarketFormSubmission(event) {
    event.preventDefault();
    props.onNewMarketCreation({names: event.target.names.value, location: event.target.location.value, describe: event.target.describe.value, id: v4()});
  }
}

NewMarketForm.propTypes = {
  onNewMarketCreation: PropTypes.func
};

export default NewMarketForm;