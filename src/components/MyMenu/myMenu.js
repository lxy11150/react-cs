import { HomeOutlined, CommentOutlined, BulbOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './myMenu.scss'

const getItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('我的主页', 'sub1', <HomeOutlined />),
    getItem('比赛', 'sub2', <BulbOutlined />),
    getItem('论坛', 'sub3', <CommentOutlined />)
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const MyMenu = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const navigate = useNavigate()
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const handleClick = (e) => {
        if (e.key === 'sub1') {
            navigate('myhomepage')
        } else if (e.key === 'sub2') {
            navigate('mycontest')
        } else if (e.key === 'sub3') {
            navigate('myforum')
        }
    }
    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
                width: 256,
            }}
            items={items}
            onClick={handleClick}
        />
    );
};
export default MyMenu;