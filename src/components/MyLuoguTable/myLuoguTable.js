import { SendOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import './myLuoguTable.scss'

const MyLuoguTable = (props) => {
    return (
        <table className="sub_match">
            <thead>
                <tr>
                    <th width="10%">状态</th>
                    <th width="25%">比赛名称</th>
                    <th width="25%">比赛时间</th>
                    <th width="10%">比赛类型</th>
                    <th width="10%">题数</th>
                    <th width="10%">创建者</th>
                    <th width="10%">操作</th>
                </tr>
            </thead>
            <tbody>
                {props.state ? props.state.map((item, index) => (
                    <tr key={index}>
                        <td>{item.status}</td>
                        <td className="fn_left">
                            <div>
                                <a href={item.url} target="_blank" className="f_left">{item.title}</a>
                            </div>
                        </td>
                        <td>{item.time}</td>
                        <td><a href={item.url} target="_blank">{item.type}</a></td>
                        <td>{item.count}</td>
                        <td>
                            <a href={item.userUrl} className="name" target="_blank">{item.constructor}</a>
                        </td>
                        <td>
                            <div>
                                <a href={item.url}><SendOutlined /></a>
                            </div>
                        </td>
                    </tr>
                )) : (
                    <Spin></Spin>
                )}
            </tbody>
        </table >
    )
}

export default MyLuoguTable