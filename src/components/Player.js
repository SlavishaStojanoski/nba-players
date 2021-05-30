import React from 'react';
import '../styles/table.css';

const Player = (props) => {
  const { player } = props;
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Position</th>
          <th>Team</th>
          <th>City</th>
        </tr>
        <tr>
          <td>TEST</td>
          <td>TEST</td>
          <td>TEST</td>
          <td>TEST</td>
          <td>TEST</td>

          {/* <td>{player.id}</td> */}
          {/* <td>{player.name}</td>
          <td>{player.username}</td>
          <td>{player.name}</td>
          <td>{player.name}</td> */}
        </tr>
        {/* <tr> */}
        {/* <td>{data[0].player.id}</td> */}
        {/* <td>{player[0].name}</td> */}
        {/* <td>{player.username}</td> */}
        {/* <td>{player.name}</td> */}
        {/* <td>{player.name}</td> */}
        {/* </table></tr> */}
      </table>
    </div>

    // <div>
    //   <div>ID:{player.props.name}</div>
    //   <div>Full_Name:{player.name}</div>
    //   <div>Position:{player.username}</div>
    //   <div>Team:{player.email}</div>
    //   <div>City:</div>
    // </div>
  );
};

export default Player;
