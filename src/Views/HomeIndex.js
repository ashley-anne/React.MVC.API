import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Fragment } from 'react';
import Edit from './Edit';
import Create from './Create';
import Delete from './Delete';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


var selectionEdit = [];
var selectionCreate = [];
var selectionDelete = [];
var selectionDetails = [];

export default function HomeIndex(props) {
  var idx = props.data[0];
  var id = props.data[1];
  var player = props.data[2];
  var players = props.data[3];
  const [showEdit, setShowEdit] = useState(() => props.data[4]);
  const [showCreate, setShowCreate] = useState(() => props.data[5]);
  const [showDelete, setShowDelete] = useState(() => props.data[6]);
  const [showDetails, setShowDetails] = useState(() => props.data[7]);
  var putData = props.data[8];
  var postData = props.data[9];
  var deleteData = props.data[10];
  // console.log(props);

  var getShowEdit = () => {
    return showEdit;
  };

  var getShowCreate = () => {
    return showCreate;
  };

  var getShowDelete = () => {
    return showDelete;
  };

  var getShowDetails = () => {
    return showDelete;
  };

  // console.log(players);

  return (
    <div>
      
      <div className="d-flex align-items-center justify-content-left">
        <Button id="btn"
          onClick={(e) => {
            e.preventDefault();
            setShowCreate(true);
            selectionCreate = [
              player,
              players,
              setShowCreate,
              getShowCreate,
              postData,
            ];
            // console.log(selectionCreate);
          }}
        >
          <h5> Add A Player</h5>
        </Button>
      </div>
      <table className='grid'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Position</th>
            <th>Line</th>
          </tr>
        </thead>
        <tbody>
          {players.map((item, ix) => {
            return (
              <Fragment key={item.id}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td>{item.position}</td>
                  <td>{item.line}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button id="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowEdit(true);
                          idx = ix;
                          id = item.id;
                          selectionEdit = [
                            idx,
                            id,
                            player,
                            players,
                            setShowEdit,
                            getShowEdit,
                            putData,
                          ];
                        }}
                      >
                        Player Edit
                      </Button>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button id="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowDetails(true);
                          idx = ix;
                          id = item.id;
                          selectionDetails = [
                            idx,
                            id,
                            player,
                            players,
                            setShowDetails,
                            getShowDetails,
                          ];
                        }}
                      >
                        Player Details
                      </Button>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button id="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowDelete(true);
                          idx = ix;
                          id = item.id;
                          selectionDelete = [
                            idx,
                            id,
                            player,
                            players,
                            setShowDelete,
                            getShowDelete,
                            deleteData,
                          ];
                        }}
                      >
                        Delete Player
                      </Button>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        <Edit show={showEdit} data={selectionEdit} />
        <Create show={showCreate} data={selectionCreate} />
        <Delete show={showDelete} data={selectionDelete} />
        <Details show={showDetails} data={selectionDetails} />
       
      </div>
    </div>
    
  );
}
