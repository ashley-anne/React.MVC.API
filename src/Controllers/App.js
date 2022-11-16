import { useEffect, useState } from 'react';
import HomeIndex from '../Views/HomeIndex';
import Player from '../Models/Player';

export default function App() {
  const requestURI = 'https://localhost:7117/api/Players/';

  var idx = null;
  var id = null;
  const [refresh, setRefresh] = useState(() => false);
  var [data, setData] = useState(() => []);
  var player = new Player();
  var players = data;
  var showEdit = false;
  var showCreate = false;

  // GET
  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setRefresh(false);
      });
  }, [refresh]);

  players = data;
  // console.log(players);

  // PUT
  function PutData(dataObj, id) {
    fetch(requestURI + id, {
      method: 'PUT',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 204) {
        console.log('PUT Failed', response);
        return;
      } else {
        // console.log('PUT Succeeded', response);
      }
    });
  }

  // POST
  function PostData(dataObj) {
    // console.log(dataObj);
    fetch(requestURI, {
      method: 'POST',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 201) {
        console.log('POST Failed', response);
        return;
      } else {
        setRefresh(true);
        // console.log('POST Succeeded', players);
      }
    });
  }

  // console.log('players is ', players);
  var selection = [
    idx,
    id,
    player,
    players,
    showEdit,
    showCreate,
    PutData,
    PostData,
  ];

  return <HomeIndex data={selection} />;
}
