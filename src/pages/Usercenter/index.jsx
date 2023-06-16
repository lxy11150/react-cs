import { useState, useEffect } from 'react'
import { FormOutlined } from '@ant-design/icons'
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken'
import { useNavigate, Outlet } from 'react-router-dom'
import MyMenu from '../../components/MyMenu/myMenu'
import './index.scss'


const Usercenter = () => {
    const [state, setState] = useState({})
    const [name, setName] = useState('')
    const token = getToken()
    const navigate = useNavigate()

    const getData = async () => {
        const login = await axiosRequest('get', '/user', null, token)
        const username = login.data.data.username.slice(0, 1)
        setName(username)
        setState(login.data.data)
    }

    const handleChange = () => {
        navigate('/home/information')
    }

    useEffect(() => {
        !token && navigate('/login')
        getData()
    }, [])

    return (
        <div className="usercenter clearfix">
            <div className="user-header">
                <div className="user-content clearfix">
                    <a className='user-wrap' href="#">
                        <div className="user-image user-portrait">{name}</div>
                    </a>
                    <div className="user-detail">
                        <div className="user-name">
                            {state.username}
                            <FormOutlined className='icon' onClick={handleChange} />
                        </div>
                        <div className="post-id">
                            <span>ID</span>
                            202300{state.id}
                        </div>
                        <div className="user-gender user-extra">
                            <div className="extra-item">
                                性别：{state.gender}
                            </div>
                        </div>
                        <div className="user-email user-extra">
                            <div className="extra-item">
                                邮箱：{state.email}
                            </div>
                        </div>
                        <div className="user-tag user-extra">
                            <div className="extra-item">
                                个性标签：
                                <span className='tag'>{state.tag}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-body clearfix">
                <div className="user-menu">
                    <MyMenu></MyMenu>
                </div>
                <div className="user-display">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Usercenter