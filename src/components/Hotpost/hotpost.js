import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FileTextOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken'
import img from '../../assets/user.jpg'
import './hotpost.scss'


const Hotpost = () => {
    const navigate = useNavigate()
    const token = getToken()
    const [state, setState] = useState()

    const gotoPost = () => {
        navigate('/home/post')
    }
    const handleGoto = (postid, username) => {
        navigate(`/home/discuss/${postid}/${username}`)
    }
    const getForum = async () => {
        const forum = await axiosRequest('get', '/forum/findAll', null, token)
        setState(forum.data.data)
        console.log(forum.data.data)
    }

    useEffect(() => {
        !token && navigate('/login')
        getForum()
    }, [])

    return (
        <div className="hot_post">
            <div className="hot_head">
                <FileTextOutlined />
                <span className='title'>热门评论</span>
                <Button className='send' onClick={gotoPost}>
                    <PlusOutlined />
                    <span>发表新帖</span>
                </Button>
            </div>
            <div className="hot_body">
                {/* 调用map的对象时，其初始化第一次渲染时“异步数据”为undefined
                    使用可选链式运算符(?.)可解决问题*/}
                {state?.map(item => (
                    <div className="hot_item" key={item.postid}>
                        <a className='user-wrap' href="#">
                            <div className="user-image user-portrait">{item.username.slice(0, 1)}</div>
                        </a>
                        <div className="item_detail clearfix">
                            <a
                                onClick={() => { handleGoto(item.postid, item.username) }}
                                className='i_title'
                                target='_blank'
                            >
                                {item.title}
                            </a>
                            <div className="i_con">
                                <a href="#"
                                    className='discuss_user'
                                >
                                    {item.username}
                                </a>
                                <p>
                                    &nbsp;&nbsp;
                                    {item.local_date_time}
                                    &nbsp;&nbsp;
                                    5天前回复
                                </p>
                                <div className="reply">
                                    <span className='pad'>回复</span>
                                    <span>{item.statement_numbers ? item.statement_numbers : 0}</span>
                                    <span>|</span>
                                    <span>赞</span>
                                    <span>{item.likenumbers ? item.likenumbers : 0}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="post_more">
                    <Link to='/home/allposts'>
                        查看全部帖子
                        <RightOutlined />
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Hotpost