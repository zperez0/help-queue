import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

// child component

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault(); // default behavior of an HTML submit button -> to submit data & refresh page -> to prevent refresh, add preventDefault()
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
    console.log(event.target.names.value); // event.target gives us access to the submit event that was just fired.
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!"
      />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
