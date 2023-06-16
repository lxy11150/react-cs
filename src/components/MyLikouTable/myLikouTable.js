import { SendOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import './myLikouTable.scss'

const MyLikouTable = (props) => {
    return (
        <table className="sub_match">
            <thead>
                <tr>
                    <th width="35%">比赛名称</th>
                    <th width="35%">比赛开始时间</th>
                    <th width="15%">比赛时长</th>
                    <th width="15%">操作</th>
                </tr>
            </thead>
            <tbody>
                {props.state ? props.state.map((item, index) => (
                    <tr key={index}>
                        <td className="fn_center">
                            <div>
                                <a href={item.url} target="_blank">{item.title}</a>
                            </div>
                        </td>
                        <td>{item.date}</td>
                        <td>{item.lasttime}</td>
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

export default MyLikouTable