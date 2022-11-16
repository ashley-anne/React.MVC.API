import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var name = null;
var numberId = 0;
var positionId = null;
var lineId = null;

var player = {};
// eslint-disable-next-line no-unused-vars
var players = [];
var setShowCreate = null;
var getShowCreate = null;
var postData = null;

const CreateForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Player Name</Form.Label>
        <Form.Control
          autoComplete="name"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (name = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="numberId">
        <Form.Label>Number</Form.Label>
        <Form.Control
          autoComplete="numberid"
          type="text"
          placeholder=""
          defaultValue="0"
          onChange={(e) => (numberId = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="positionId">
        <Form.Label>Position</Form.Label>
        <Form.Control
          autoComplete="positionId"
          type="text"
          placeholder=""
          defaultValue="0"
          onChange={(e) => (positionId = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lineId">
        <Form.Label>Line</Form.Label>
        <Form.Control
          autoComplete="lineId"
          type="text"
          placeholder=""
          defaultValue="0"
          onChange={(e) => (lineId = e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

function CreateFormSubmit(e) {
  e.preventDefault();
  setShowCreate(false);

  if (name === null) return;

  player.name = name;
  player.number = numberId;
  player.position = positionId;
  player.line = lineId;
  postData(player);

  console.log(player, players);

  name = null;
  numberId = 0;
  positionId = null;
  lineId = null;
  return;
}

export default function Create(props) {
  if (!props.show) {
    return null;
  }

  player = props.data[0];
  players = props.data[1];
  setShowCreate = props.data[2];
  getShowCreate = props.data[3];
  postData = props.data[4];

  // console.log(props, getShowCreate());

  var handleClose = () => {
    setShowCreate(false);
    return;
  };

  return (
    <div>
      <Modal id="createModal" show={getShowCreate} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm onSubmit={CreateFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
