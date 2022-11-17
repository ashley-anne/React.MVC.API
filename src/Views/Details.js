import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line no-unused-vars
var name = null;
// eslint-disable-next-line no-unused-vars
var numberId = 0;
// eslint-disable-next-line no-unused-vars
var positionId = 0;

var idx = null;
// eslint-disable-next-line no-unused-vars
var id = null;
// eslint-disable-next-line
var player = {};
var players = [];
var setShowDetails = null;
var getShowDetails = null;

const DetailsForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Name</Form.Label>
        <Form.Control
          autoComplete="name"
          type="text"
          placeholder={players[idx].name}
          defaultValue={players[idx].name}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="numberId">
        <Form.Label>Number</Form.Label>
        <Form.Control
          autoComplete="studioId"
          type="text"
          placeholder={players[idx].numberId}
          defaultValue={players[idx].numberId}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="positionId">
        <Form.Label>Position</Form.Label>
        <Form.Control
          autoComplete="positionId"
          type="text"
          placeholder={players[idx].positionId}
          defaultValue={players[idx].positionId}
          readOnly={true}
        />
      </Form.Group>
    </Form>
  );
};

function DetailsFormSubmit(e) {
  e.preventDefault();
  setShowDetails(false);

  console.log(player, players);

  name = null;
  numberId = 0;
  positionId = 0;

  return;
}

export default function Details(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  player = props.data[2];
  players = props.data[3];
  setShowDetails = props.data[4];
  getShowDetails = props.data[5];

  // console.log(props, getShowDetails());

  var handleClose = () => {
    setShowDetails(false);
    return;
  };

  return (
    <div>
      <Modal id="DetailsModal" show={getShowDetails} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetailsForm onSubmit={DetailsFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
