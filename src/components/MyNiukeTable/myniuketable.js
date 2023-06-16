import { SendOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import './myniuketable.scss'

const MyNiukeTable = (props) => {
    return (
        <table className="sub_match">
            <thead>
                <tr>
                    <th width="10%">比赛ID</th>
                    <th width="35%">比赛名称</th>
                    <th width="25%">比赛开始时间</th>
                    <th width="10%">比赛时长</th>
                    <th width="10%">创建者</th>
                    <th width="10%">操作</th>
                </tr>
            </thead>
            <tbody>
                {props.state ? props.state.map(item => (
                    <tr key={item.contestId}>
                        <td><a href={item.contestUrl} target="_blank">{item.contestId}</a></td>
                        <td className="fn_left">
                            <div>
                                <a href={item.contestUrl} target="_blank" className="f_left">{item.title}</a>
                            </div>
                        </td>
                        <td>{item.startTime}</td>
                        <td>{item.lastTime}</td>
                        <td>
                            <a href={item.contestUrl} className="name" target="_blank">{item.constructor}</a>
                        </td>
                        <td>
                            <div>
                                <a href={item.contestUrl}><SendOutlined /></a>
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

export default MyNiukeTable