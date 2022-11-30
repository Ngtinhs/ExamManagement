import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDetailUser from "./ModalDetailUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
  const [showModalCreateUser, SetshowModalCreateUser] = useState(false);
  const [showModalUpdateUser, SetshowModalUpdateUser] = useState(false);
  const [showModalDetailUser, SetshowModalDetailUser] = useState(false);
  const [showModalDeleteUser, SetshowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDetail, setDataDetail] = useState({});
  const [dataDelete, setDataDelete] = useState({});

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

  //Xu ly update user
  const handleClickBtnUpdate = (user) => {
    SetshowModalUpdateUser(true);
    setDataUpdate(user);
  };

  //Xu ly Detail user
  const handleClickBtnDetail = (user) => {
    SetshowModalDetailUser(true);
    setDataDetail(user);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };

  const handleClickBtnDelete = (user) => {
    SetshowModalDeleteUser(true);
    setDataDelete(user);
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
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDetail={handleClickBtnDetail}
            handleClickBtnDelete={handleClickBtnDelete}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={SetshowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={SetshowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalDetailUser
          setShow={SetshowModalDetailUser}
          show={showModalDetailUser}
          fetchListUsers={fetchListUsers}
          dataUpdate={dataDetail}
        />

        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={SetshowModalDeleteUser}
          dataDelete={dataDelete}
        />
      </div>
    </div>
  );
};

export default ManageUser;
