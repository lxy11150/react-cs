import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { axiosRequest } from '../../utils/axiosRequest';
import { getToken } from '../../utils/getToken';

const Usercen = React.memo((props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [state, setState] = useState({})
    const token = getToken()

    const gotoUser = () => {
        navigate('/home/usercenter/myhomepage')
    }

    const outUser = () => {
        localStorage.removeItem('myData');
        navigate('/login')
    }

    const getData = async () => {
        const datas = await axiosRequest('get', '/user', null, token)
        setState(datas.data.data)
    }
    //注意这里getData()必须用{}括起来，使useEffect()的函数参数返回值为空，不然会报错
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        getData()
    }, [])

    const items = [
        {
            label: <a onClick={gotoUser}>个人中心</a>,
            key: '0',
        },
        {
            label: <a onClick={outUser}>退出登录</a>,
            key: '1',
        },
        // {
        //     type: 'divider',
        // },
        // {
        //     label: '3rd menu item',
        //     key: '3',
        // },
    ];

    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {`欢迎您${state.username}`}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
})
export default Usercen;