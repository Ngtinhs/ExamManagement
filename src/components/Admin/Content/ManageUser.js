import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";

const ManageUser = (props) => {
  const [showModalCreateUser, SetshowModalCreateUser] = useState("false");
  const [listUsers, setListUsers] = useState([]);

  //ComponentDidMount
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  return (
    <div className="manag-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => SetshowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>

        <div className="table-users-container">
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={SetshowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
