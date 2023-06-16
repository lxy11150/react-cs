import React, { useState, useEffect } from 'react';
import './index.scss'
import { Input, Select, Button, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken';
import MyTextArea from '../../components/MyTextArea/mytextarea';


const Post = React.memo(() => {
    const navigate = useNavigate()
    const [content, setContent] = useState('');
    const token = getToken()

    const handleContentChange = (value) => {
        setContent(value);
    };

    const onFinish = async (values) => {
        console.log('Success:', values);
        await axiosRequest('post', '/forum/savePost', values, token)
        navigate('/home/forum')
    };

    useEffect(() => {
        if (!token) {
            navigate('/home/login')
            alert('登录过期，请重新登录！')
        }
    }, [])

    return (
        <div className="forum_post">
            <div className="form">
                <div className="post_header">
                    我要发贴
                </div>
                <p className='sub_title'>
                    <span>发帖前请先阅读</span>
                    <a href="https://aistudio.baidu.com/paddle/forum/topic/show/988196" target="_blank">如何提问更容易找到答案?</a>
                </p>
                <Form
                    onFinish={onFinish}
                >
                    {/* 标题 */}
                    <Form.Item
                        name='title'
                        className="post_title"
                        label="标题"
                        rules={[
                            {
                                required: true,
                                message: '请输入标题!',
                            },
                        ]}
                    >
                        <Input
                            placeholder='标题最多只能输入50个字符哦~~'
                            maxLength='50'
                            showCount
                        ></Input>
                    </Form.Item>
                    {/* 类型 */}
                    <Form.Item
                        name='type'
                        className="post_type"
                        label="类型"
                        rules={[
                            {
                                required: true,
                                message: '请选择类型!',
                            },
                        ]}
                    >
                        <Select
                            options={[
                                { value: '经验分享' },
                                { value: '题解分析' },
                                { value: '大佬求助' },
                                { value: '资料分享' },
                            ]}
                        ></Select>
                    </Form.Item>
                    {/* 内容 */}
                    <Form.Item
                        name="content"
                        className="post_body"
                        label="内容"
                        rules={[
                            {
                                required: true,
                                message: '请输入文章内容!',
                            },
                        ]}
                    >
                        <MyTextArea onChange={handleContentChange} />
                    </Form.Item>
                    <Form.Item className="post_btn">
                        <Button type="primary" htmlType="submit">
                            我要发贴
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div >
    );
})

export default Post;
