import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import {
  getAllUsers,
  getUSerWithPaginate,
} from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDetailUser from "./ModalDetailUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const LIMIT_USER = 5;
  const [pageCount, setPageCount] = useState(0);

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
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUSerWithPaginate(page, LIMIT_USER);

    if (res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
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
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDetail={handleClickBtnDetail}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={SetshowModalCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={SetshowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
        />
        <ModalDetailUser
          setShow={SetshowModalDetailUser}
          show={showModalDetailUser}
          fetchListUsers={fetchListUsers}
          dataUpdate={dataDetail}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
        />

        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={SetshowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
