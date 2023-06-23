import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Pagination } from 'antd'
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken'
import './index.scss'

const AllComments = () => {
    const [comment, setComment] = useState([])
    const [send, setSend] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const token = getToken()

    const getComments = async () => {
        const res = await axiosRequest('get', `/forum/searchStatement/${params.postid}`, null, token)
        setComment(res.data.data)
        setSend(res.data.data.slice(0, 15))
        // console.log(res.data.data);
    }

    const handleChange = (e) => {
        if (e * 15 < comment.length) {
            setSend(comment.slice(e * 15 - 15, e * 15))
        } else {
            setSend(comment.slice(e * 15 - 15, comment.length))
        }
    }

    useEffect(() => {
        !token && navigate('/login')
        getComments()
    }, [])

    return (
        <div className="all_comments">
            {send?.map((item, index) => (
                <div className="answer_list_item" key={index}>
                    <div className="answer_content clearfix">
                        <div className="answer_head">
                            <a className='user-wrap' href="#">
                                <div className="user-image user-portrait">{item.username.slice(0, 1)}</div>
                            </a>
                        </div>
                        <div className="answer_detail">
                            <p>
                                <a href="#">{item.username}</a>
                            </p>
                            <div className="answer_com">
                                {item.content}
                            </div>
                            <div className="answer_foot">
                                <span className="answer-time">发表于 {item.localDateTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Pagination
                defaultCurrent={1}
                defaultPageSize={15}
                total={comment?.length}
                showSizeChanger={false}
                showQuickJumper
                className="pagination"
                onChange={handleChange}
            ></Pagination>
        </div>
    )
}


export default AllComments