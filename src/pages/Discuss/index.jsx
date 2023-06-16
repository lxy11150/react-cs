import { useState, useEffect, useRef } from 'react'
import { UserOutlined, HistoryOutlined, MessageOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { Form, Input, Button } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useParams, useNavigate } from 'react-router-dom'
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken'
import RenderHTMLString from '../../components/RenderHTMLString/renderHTNLString'
import img from '../../assets/user.jpg'
import './index.scss'

const Discuss = () => {
    const [login, setLogin] = useState({}) //当前登录者的用户信息
    const [content, setContent] = useState({}) //文章内容
    const [user, setUser] = useState({}) //文章作者信息
    const [comment, setComment] = useState() //文章评论信息
    const [recomment, setRecomment] = useState([]) //对应文章评论的回复
    const [reforms, setReforms] = useState([]);
    const [form] = useForm(); //表单元素
    const params = useParams() //检索parmas参数
    const navigate = useNavigate() //导航参数
    const text = useRef()
    const dishelp = useRef()
    const help = useRef()
    const huifu = useRef([])
    const token = getToken()

    //得到当前登录者信息
    const getLogin = async () => {
        const log = await axiosRequest('get', '/user', null, token)
        setLogin(log.data.data)
    }

    //得到文章作者的信息
    const getUser = async () => {
        const res = await axiosRequest('get', '/username', null, token, params.username)
        setUser(res.data.data)
        // console.log(res.data.data);
    }

    //得到文章信息
    const getContent = async () => {
        const res = await axiosRequest('get', `/forum/findPostById/${params.postid}`, null, token)
        setContent(res.data.data)
        console.log(res.data.data);
        getComment(res.data.data.postid)
    }

    //得到本登录者对这篇文章的点赞情况
    const getLikes = async () => {
    }
    //得到文章评论信息
    const getComment = async (postid) => {
        const comm = await axiosRequest('get', `/forum/searchStatement/${postid}`, null, token)
        console.log(comm.data.data);
        setComment(comm.data.data)
        getRecomment(comm.data.data)
    }

    const getRecomment = async (comm) => {
        let res = []
        for (let i = 0; i < comm.length; i++) {
            const recomm = await axiosRequest('get', `/forum/searchStatement/${comm[i].postid}`, null, token)
            console.log(recomm.data.data);
            res.push(recomm.data.data)
        }
        setRecomment(res)
        console.log(res);
    }

    useEffect(() => {
        !token && navigate('/login')
        token && getUser()
        token && getLogin()
        token && getContent()
    }, [])

    //更新评论
    const putComment = async (datas) => {
        await axiosRequest('post', '/forum/savaStatement', datas, token)
        await getComment(content.postid)
    }

    //成功发送评论
    const onFinish = (values) => {
        console.log(values);
        let datas = {}
        datas.type = content.postid
        datas.content = values.comment
        datas.title = `关于${content.title}的评论`
        putComment(datas)
        form.setFieldsValue({ comment: '' })
    }

    const handleAddHelp = (e) => {
    }

    const handleAddDishelp = (e) => {
    }

    const handleOut = (index) => {
        const dis = huifu.current[index]
        if (dis.style.display == 'block') {
            dis.style.display = 'none'
        } else {
            dis.style.display = 'block'
        }
    }

    const handleHuifu = (value, index) => {
        console.log(value);

        //向后端发送回复评论的数据
        const i = huifu.current[index].children[0][0].value !== ''
        let datas = {}
        datas.content = value.reply
        datas.type = comment[index].postid
        datas.title = comment[index].content
        console.log(datas);
        i && putComment(datas)
        handleOut(index)
    }

    return (
        <div className="discuss">
            <div className="dis_container">
                <div className="dis_left">
                    <div className="dis_info">
                        <h4 className="user_nick">{user.username}</h4>
                        <p>{`用户名：${user.username}`}</p>
                        <p>已参加比赛：191</p>
                        <p>文章发表：26</p>
                        <p>{`个性标签：${user.tag}`}</p>
                    </div>
                </div>
                <div className="dis_right">
                    <div className="dis_content">
                        <div className="dis_header">
                            <div className="dis_title">
                                <h1>{content.title}</h1>
                            </div>
                            <div className='author'>
                                <UserOutlined />
                                <span>作者：</span>
                                <a target="_blank" href="#">{user.username}</a>
                                <HistoryOutlined />
                                <span>{`  发表时间：${content.localDateTime}`}</span>
                                <span className='scan'>
                                    {`浏览：${content.statement_numbers ? content.statement_numbers : 0}　|　
                                    评论：${content.statement_numbers ? content.statement_numbers : 0}`}
                                </span>
                            </div>
                        </div>
                        <div className="dis_body">
                            <div className="body_content">
                                <RenderHTMLString htmlString={content.content} />;
                                <div className="dis_help">
                                    <span className='help_num'>{content.likesnumbers ? content.likesnumbers : 0}</span>
                                    <DislikeOutlined onClick={handleAddDishelp} ref={dishelp} />
                                    <span className='help_num'>{content.likesnumbers ? content.likesnumbers : 0}</span>
                                    <LikeOutlined onClick={handleAddHelp} ref={help} />
                                </div>
                            </div>
                        </div>
                        <div className="dis_comment">
                            <div className="com_content">
                                <div className="con_title">
                                    <h4><MessageOutlined />评论区</h4>
                                </div>
                                <div className="con_display">
                                    <Form
                                        form={form}
                                        className='form'
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name='comment'
                                            label="评论"
                                        >
                                            <Input.TextArea className='text' ref={text} />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                发布
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="all_discuss">
                            <div className="dis_list">
                                <div className="list_header clearfix">
                                    <h1>全部评论</h1>
                                    <span className='com_num'>
                                        {`（${comment ? comment.length : 0}条）`}
                                    </span>
                                </div>
                                <div className="list_body clearfix">
                                    <div className="answer_list">
                                        {comment ? comment?.map((item, index) => (
                                            <div className="answer_list_item" key={item.localDateTime}>
                                                <div className="answer_content clearfix">
                                                    <div className="answer_head">
                                                        <a href="#">
                                                            <img src={img} alt="" />
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
                                                            <a onClick={() => handleOut(index)}>
                                                                <MessageOutlined style={{ marginRight: 5 }} />
                                                                {`回复(${item.statement_numbers ? item.statement_numbers : 0})`}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="ans_answer" ref={c => huifu.current[index] = c}>
                                                        <Form
                                                            form={reforms[index]}
                                                            className='ans_form'
                                                            onFinish={(values) => handleHuifu(values, index)}
                                                        >
                                                            <Form.Item
                                                                name='reply'
                                                            >
                                                                <Input.TextArea
                                                                    className='ans_text'
                                                                    placeholder={`${login.username}向  @${item.username}回复`}
                                                                />
                                                            </Form.Item>
                                                            <Form.Item>
                                                                <Button type="primary" htmlType="submit">
                                                                    发布
                                                                </Button>
                                                            </Form.Item>
                                                        </Form>
                                                    </div>

                                                    {recomment[index] ? recomment[index].map(re => (
                                                        <div className="ans_detail" key={re.localDateTime}>
                                                            <div className="huifu">
                                                                <div className="answer_head">
                                                                    <a href="#">
                                                                        <img src={img} alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="answer_detail">
                                                                    <p>
                                                                        <a href="#">{re.username}</a>
                                                                    </p>
                                                                    <div className="answer_com">
                                                                        {re.content}
                                                                    </div>
                                                                    <div className="answer_foot">
                                                                        <span className="answer-time">回复于 {re.localDateTime}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )) : null}
                                                </div>
                                            </div>
                                        )) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Discuss