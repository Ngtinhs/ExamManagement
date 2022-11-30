import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
const TableUser = (props) => {
  const { listUsers } = props;
  // Const listUsers = props.listUsers;
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <tr key={`table-users-${index}`}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <button className="btn">View</button>
                  <button
                    className="btn btn-warning mx-3"
                    onClick={() => props.handleClickBtnUpdate(item)}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        {listUsers && listUsers.length === 0 && (
          <tr>
            <td colSpan={"4"}>Not found data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableUser;
