import React from "react";
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const MyHomepage = () => {
    const navigate = useNavigate()

    return (
        <div className="my-homepage">
            <div className="section">
                <div className="section-title">
                    成就统计
                </div>
                <div className="section-body">
                    <div className="achievement">
                        <div className="achievement-item">
                            <span className="achievement-tag">
                                参加比赛
                            </span>
                            <div className="item-content">
                                <span>还没有参加过任何比赛</span>
                                <a onClick={() => navigate('/home/contest')} >
                                    <Button>去参加</Button>
                                </a>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <span className="achievement-tag">
                                练习题目
                            </span>
                            <div className="item-content">
                                <span>还没有练习任何题目</span>
                                <a onClick={() => navigate('/home/problem')} >
                                    <Button>去练习</Button>
                                </a>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <span className="achievement-tag">
                                发表文章
                            </span>
                            <div className="item-content">
                                <span>还没发表任何文章</span>
                                <a onClick={() => navigate('/home/post')} >
                                    <Button>去发表</Button>
                                </a>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <span className="achievement-tag">
                                发表评论
                            </span>
                            <div className="item-content">
                                <span>还没发表任何评论</span>
                                <a onClick={() => navigate('/home/forum')} >
                                    <Button>去评论</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyHomepage