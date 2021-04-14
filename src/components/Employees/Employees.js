import React from "react";
import "./style.css";

function Employees(props) {
  return (
    <tr>
      <th>
        <img alt={props.firstname} src={props.image}></img>
      </th>
      <th>{props.firstname}</th>
      <th>{props.lastname}</th>
      <th>{props.email}</th>
      <th>{props.phone}</th>
    </tr>
  );
}

export default Employees;
