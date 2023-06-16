import React from 'react'
import { Button, Space } from 'antd';
import { getToken } from '../../../utils/getToken'
import Usercen from '../../Usercen/usercen';

const Buttons = React.memo(
    (props) => {

        const login = () => {
            props.navigate('/login')
        }

        const register = () => {
            props.navigate('/register')
        }

        //判断渲染那个组件
        const renderButton = () => {
            // 获取localStorage中的数据
            const parsedData = getToken();
            if (parsedData) {
                return (
                    <Usercen type='personal'></Usercen>
                    // 个人中心按钮
                );
            } else {
                return (
                    <>
                        <Button type="signin" onClick={login}>登录</Button>
                        <Button type="login" onClick={register}>注册</Button>
                    </>
                    // 登录按钮
                );
            }
        };

        return (

            <div>
                <Space wrap className='logspace'>
                    {renderButton()}
                </Space>
            </div>
        )
    }
)

export default Buttons