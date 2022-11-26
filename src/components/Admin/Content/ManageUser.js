import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState } from "react"

const ManageUser = (props) => {
    const [showModalCreateUser, SetshowModalCreateUser] = useState("false")
    return (
        <div className='manag-user-container'>
            <div className='title'>
                Manage User
            </div>
            <div className='users-content'>
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => SetshowModalCreateUser(true)}>
                    <FcPlus />
                    Add new user</button>
                </div>

                <div className="table-users-container">
                    table users
                </div>
                <ModalCreateUser show={showModalCreateUser}
                setShow ={SetshowModalCreateUser}
                />

            </div>


        </div>
    )
}

export default ManageUser
