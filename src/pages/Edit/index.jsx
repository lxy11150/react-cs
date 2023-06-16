import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Input, Select, Button, Form } from 'antd';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken'
import './index.scss'

const Edit = () => {
    const [post, setPost] = useState()
    const token = getToken()
    const parmas = useParams()
    const [form] = Form.useForm()
    const editorRef = useRef(null);
    const quillRef = useRef(null);
    const navigate = useNavigate()

    const onFinish = (values) => {
        // console.log(values);
        let con = { ...post }
        con.type = values.type
        con.title = values.title
        con.postid = parmas.postid
        console.log(con);
        axiosRequest('post', '/forum/updatePost', con, token)
        navigate(-1)
    }

    const getPost = async () => {
        try {
            const res = await axiosRequest('get', `/forum/findPostById/${parmas.postid}`, null, token)
            setPost(res.data.data)
            console.log(res.data.data);
            form.setFieldsValue({
                title: res.data.data.title,
                type: res.data.data.type
            })
            quillRef.current.root.innerHTML = res.data.data.content
        }
        catch (error) {
            console.error('请求用户数据时发生错误:', error);
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    useEffect(() => {
        if (!quillRef.current) {
            // 初始化 Quill 实例
            const editor = new Quill(editorRef.current, {

                theme: 'snow',
                placeholder: '在此输入内容...',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'align': [] }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        ['link', 'image', 'video'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['clean']
                    ],
                },
                // 设置初始值
                readOnly: false,
            });

            const handleChange = () => {
                const content = editor.root.innerHTML;
                let con = { ...post }
                con.content = content
                setPost(con)
            };

            editor.on('text-change', handleChange);

            quillRef.current = editor;
        }
    }, []);

    return (
        <div className="edit">
            <Form
                form={form}
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
                >
                    <div ref={editorRef}></div>
                </Form.Item>
                <Form.Item className="post_btn">
                    <Button type="primary" htmlType="submit">
                        保存修改
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Edit