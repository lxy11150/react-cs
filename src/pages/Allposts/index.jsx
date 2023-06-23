import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosRequest } from '../../utils/axiosRequest'
import { Pagination } from 'antd'
import { getToken } from '../../utils/getToken'
import './index.scss'

const Allposts = () => {
    const [state, setState] = useState([])
    const [send, setSend] = useState()
    const navigate = useNavigate()
    const ref = useRef()
    const token = getToken()

    //前往对应文章的页面
    const handleGoto = (postid, username) => {
        navigate(`/home/discuss/${postid}/${username}`)
    }

    const handleChange = async (e) => {
        // console.log(e);
        if (e * 15 < state.length) {
            setSend(state.slice(e * 15 - 15, e * 15))
        } else {
            setSend(state.slice(e * 15 - 15, state.length))
        }
    }

    //将前往第几页翻译成中文
    const handleChinese = () => {
        const len = ref.current.children[0].children.length
        let con = ref.current.children[0].children[len - 1].children[0].childNodes
        con[0].data = '前往'
        con[2].data = '页'
    }

    //获取论坛的信息
    const getForum = async () => {
        const forum = await axiosRequest('get', '/forum/findAll', null, token)
        setState(forum.data.data)
        setSend(forum.data.data.slice(0, 15))
    }

    useEffect(() => {
        !token && navigate('/login')
        token && getForum()
        state.length > 15 && handleChinese()
    }, [])

    return (
        <div className="allposts">
            <div className="all_container">
                <div className="all_body">
                    {/* 调用map的对象时，其初始化第一次渲染时“异步数据”为undefined
                    使用可选链式运算符(?.)可解决问题*/}
                    {send?.map(item => (
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
                                        {item.localDateTime}
                                        发布
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
                </div>
                <div className="pagination" ref={ref}>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={15}
                        total={state.length}
                        showSizeChanger={false}
                        showQuickJumper
                        onChange={handleChange}
                    ></Pagination>
                </div>
            </div>
        </div >
    )
}

export default Allposts