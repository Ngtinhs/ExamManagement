import videoHomepage from '../../assets/video-homepage.mp4'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    const isAuthencicated = useSelector(state => state.user.isAuthencicated)
    const navigate = useNavigate()
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>There's a better way to ask</div>
                <div className='title-2'>You don't want to make boring You don't want to make boring You don't want to make boring You don't want to make boring You don't want to make boring </div>
                <div className='title-3'>
                    {isAuthencicated === false ?
                        <button onClick={() => navigate('/login')}>
                            Bắt đầu
                        </button>
                        :
                        <button onClick={() => navigate('/users')}>Doing quiz now !!</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
