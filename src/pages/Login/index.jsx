import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Watermark } from 'antd';
import { useNavigate } from 'react-router-dom';
import { axiosRequest } from '../../utils/axiosRequest';
import img from '../../assets/logo.png'
import './index.scss'

const Login = () => {
    const savedData = localStorage.getItem('login');
    const value = JSON.parse(savedData)
    const username = value ? value.username : ''
    const password = value ? value.password : ''
    const navigate = useNavigate()

    const onFinish = async (values) => {
        if (values.remember === true) {
            delete values.remember
            localStorage.setItem('login', JSON.stringify(values));
        } else {
            delete values.remember
            localStorage.removeItem('login')
        }
        console.log(values);
        let login = null
        const str = values.username.includes("@")
        console.log(str);
        if (str) {
            let value = {}
            value.email = values.username
            value.password = values.password
            login = await axiosRequest('post', '/login/email', value)
        } else {
            login = await axiosRequest('post', '/login/username', values)
        }
        // console.log(login);

        const token = login.data.data
        // 将数据保存到localStorage
        const expirationTime = new Date().getTime() + 12 * 60 * 60 * 1000; // 12小时后的时间戳
        const data = {
            token,
            expirationTime
        };
        localStorage.setItem('myData', JSON.stringify(data));
        if (login.data.msg === 'success') {
            navigate('/home/main')
        }
    };

    const gotoRegister = () => {
        navigate('/register')
    }

    return (
        <div className="form">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    username: username,
                    password: password,
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的用户名或邮箱!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="用户名或邮箱"
                        autoComplete="username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的密码!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        autoComplete="current-password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    或者 <a href="" onClick={gotoRegister}>去注册</a>
                </Form.Item>
            </Form>
            <img src={img} alt="" className='img1' />
            {/* 水印组件 */}
            <Watermark content="超赛CS">
                <div style={{ height: 500, }} />
            </Watermark>
        </div>
    );
};
export default Login;