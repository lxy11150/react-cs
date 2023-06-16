import React, { useState, useEffect } from "react";
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken'
import './index.scss'

const MyForum = () => {
    const navigate = useNavigate()
    const token = getToken()
    const [state, setState] = useState()
    const [read, setRead] = useState([])
    let count = []

    //删除功能
    const handleDelete = async (postid) => {
        await axiosRequest('delete', `/forum/deletePost/${postid}`, null, token)
        getForum()
    }

    //编辑功能
    const handleChange = (postid) => {
        navigate(`/home/edit/${postid}`)
    }

    //查阅我的贴子功能
    const handleGoto = (postid, username) => {
        navigate(`/home/discuss/${postid}/${username}`)
    }

    //查阅我评论过的贴子功能
    const handleRead = (postid, username) => {
        navigate(`/home/discuss/${postid}/${username}`)
    }

    //获取论坛信息
    const getForum = async () => {
        const login = await axiosRequest('get', '/user', null, token)
        const username = login.data.data.username
        const forum = await axiosRequest('get', `/forum/searchPostByUsername/${username}`, null, token)
        setState(forum.data.data)
        const res = await axiosRequest('get', `/forum/postStatemented/${username}`, null, token)
        count = [... new Set(res.data.data)]
        for (let i = 0; i < count.length; i++) {
            const red = await axiosRequest('get', `/forum/findPostById/${count[i]}`, null, token)
            let reads = [...read]
            reads.push(red.data.data)
            setRead(reads)
            console.log(reads);
        }
    }

    useEffect(() => {
        !token && navigate('/login')
        getForum()
    }, [])

    return (
        <div className="my-forum">
            <div className="my-post">
                <div className="section">
                    <div className="section-title">
                        我的贴子
                    </div>
                    <div className="section-body">
                        <table border={"1"} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th width="35%">标题</th>
                                    <th width="20%">发表时间</th>
                                    <th width="10%">获赞数</th>
                                    <th width="20%">类型</th>
                                    <th width="15%">功能</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state?.map((item, index) => (
                                    <tr key={index}>
                                        <td onClick={() => handleGoto(item.postid, item.username)}>{item.title}</td>
                                        <td>{item.localDateTime}</td>
                                        <td>{item.likeNumber ? item.likeNumber : 0}</td>
                                        <td>{item.type}</td>
                                        <td className="delete">
                                            <Button onClick={() => handleDelete(item.postid)} className="btn-1">删除</Button>
                                            <Button onClick={() => handleChange(item.postid)} className="btn-2">编辑</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">
                        我评论过的贴子
                    </div>
                    <div className="section-body">
                        <table border={"1"} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th width="35%">标题</th>
                                    <th width="20%">发表时间</th>
                                    <th width="10%">获赞数</th>
                                    <th width="20%">类型</th>
                                    <th width="15%">功能</th>
                                </tr>
                            </thead>
                            <tbody>
                                {read?.map((item, index) => (
                                    <tr key={index}>
                                        <td onClick={() => handleGoto(item.postid, item.username)}>{item.title}</td>
                                        <td>{item.localDateTime}</td>
                                        <td>{item.likeNumber ? item.likeNumber : 0}</td>
                                        <td>{item.type}</td>
                                        <td className="read">
                                            <Button onClick={() => handleRead(item.postid, item.username)} className="btn-1">查看</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyForum