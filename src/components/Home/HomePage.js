import videoHomepage from '../../assets/video-homepage.mp4'
import React from 'react'
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
const HomePage = (props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Test</div>
                <div className='title-2'>Test</div>
                <div className='title-3'>
                    <button>
                        Bat dau
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
