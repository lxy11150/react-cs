import React from 'react'
import './index.scss'
import Hotpost from '../../components/Hotpost/hotpost'
import MajorForum from '../../components/MajorForum/majorForum'


const Forum = () => {
    return (
        <div className='forum'>
            <div className="forum_head">
                <div className="forum_wrap">
                    <div className="forum_head_title">
                        <h2>超赛内卷论坛</h2>
                        <span>CS Involution Forum</span>
                    </div>
                </div>
            </div>
            <div className="forum_body">
                <div className="forum_con">
                    <div className="forum_left">
                        <MajorForum></MajorForum>
                    </div>
                    <div className="forum_right">
                        <Hotpost></Hotpost>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forum;