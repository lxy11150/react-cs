import { AppstoreOutlined, MailOutlined, SettingOutlined, BulbOutlined, UploadOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo.png'
import Buttons from './Button/button';

const items = [
    {
        label: (<Link to='/home/main'>首页</Link>),
        key: 'main',
        icon: <MailOutlined />,
    },
    {
        label: (<Link to='/home/forum'>论坛</Link>),
        key: 'communication',
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link to={'/home/contest'}>比赛</Link>,
        key: 'contest',
        icon: <SettingOutlined />,
    },
    {
        label: <Link to={'/home/problem'}>题库</Link>,
        key: 'problem',
        icon: <UploadOutlined />,
    },
    {
        label: <Link to={'/home/other'} rel="noopener noreferrer">关于</Link>,
        key: 'alipay',
        icon: <BulbOutlined />
    },
];

const Headers = React.memo(
    (props) => {
        let location = useLocation()
        const navigate = useNavigate();
        const [current, setCurrent] = useState(location.pathname.slice(6));
        const onClick = (e) => {
            console.log(location.pathname);
            setCurrent(e.key);
        };
        
        return (
            <div className='header clearfix'>
                <div className='logo'><img src={logo} alt="" /></div>
                <div className='sign-log'>
                    <Buttons navigate={navigate}></Buttons>
                </div>
                <div className='nav'>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </div>
            </div>
        )
    }
)
export default Headers;