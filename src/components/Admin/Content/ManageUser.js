import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'

const ManageUser = (props) => {
    return (
        <div className='manag-user-container'>
            <div className='title'>
                Manage User
            </div>
            <div className='users-content'>
                <div>
                    <button>Add new user</button>
                </div>

                <div>
                    table users
                </div>
                <ModalCreateUser />

            </div>


        </div>
    )
}

export default ManageUser
