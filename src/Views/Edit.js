import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var name = null;
var numberId = 0;
var positionId = 0;

var idx = null;
var id = null;
// eslint-disable-next-line
var player = {};
var players = [];
var setShowEdit = null;
var getShowEdit = null;
var putdata = null;

const EditForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Player Name</Form.Label>
        <Form.Control
          autoComplete="name"
          type="text"
          placeholder={players[idx].name}
          defaultValue={players[idx].name}
          onChange={(e) => (name = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="numberId">
        <Form.Label>Player Number</Form.Label>
        <Form.Control
          autoComplete="numberId"
          type="text"
          placeholder={players[idx].number}
          defaultValue={players[idx].number}
          onChange={(e) => (numberId = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="positionId">
        <Form.Label>Position</Form.Label>
        <Form.Control
          autoComplete="positionId"
          type="text"
          placeholder={players[idx].position}
          defaultValue={players[idx].position}
          onChange={(e) => (positionId = e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

export default function Edit(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  player = props.data[2];
  players = props.data[3];
  setShowEdit = props.data[4];
  getShowEdit = props.data[5];
  putdata = props.data[6];

  // console.log(props);

  var handleClose = () => {
    setShowEdit(false);
    return;
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setShowEdit(false);

    if (name !== null) {
      players[idx].name = name;
    }

    if (numberId !== 0) {
      players[idx].number = numberId;
    }

    if (positionId !== 0) {
      players[idx].position = positionId;
    }

    name = null;
    numberId = 0;
    positionId = 0;

    console.log(players,id)

    putdata(players[idx], id);

    return;
  };

  return (
    <div>
      <Modal id="editModal" show={getShowEdit} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm onSubmit={onEditFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
