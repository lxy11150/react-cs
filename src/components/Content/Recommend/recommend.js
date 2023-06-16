import React from 'react'
import './recommend.scss'

export default class Recommend extends React.Component {
    state = {
        data: [{
            "url": [
                "https://www.dotcpp.com/oj/train/1099/",
                "https://www.dotcpp.com/oj/train/1098/"
            ],
            "values": [
                "2023年第十四届蓝桥杯大赛软件类省赛Java研究生组真题",
                "2023年第十四届蓝桥杯大赛软件类省赛Java大学C组真题"
            ],
            "id": 1
        },
        {
            "url": [
                "https://www.dotcpp.com/oj/train/1097/",
                "https://www.dotcpp.com/oj/oj/train/1096/"
            ],
            "values": [
                "2023年第十四届蓝桥杯大赛软件类省赛Java大学B组真题",
                "2023年第十四届蓝桥杯大赛软件类省赛Java大学A组真题"
            ],
            "id": 2
        },
        {
            "url": [
                "https://www.dotcpp.com/oj/train/1095/",
                "https://www.dotcpp.com/oj/train/1094/"
            ],
            "values": [
                "2023年第十四届蓝桥杯大赛软件类省赛Python研究生组真题",
                "2023年第十四届蓝桥杯大赛软件类省赛Python大学C组真题"
            ],
            "id": 3
        },
        {
            "url": [
                "https://www.dotcpp.com/oj/train/1093/",
                "https://www.dotcpp.com/oj/train/1092/"
            ],
            "values": [
                "2023年第十四届蓝桥杯大赛软件类省赛Python大学B组真题",
                "2023年第十四届蓝桥杯大赛软件类省赛Python大学A组真题"
            ],
            "id": 4
        },
        {
            "url": [
                "https://www.dotcpp.com/oj/train/1091/",
                "https://www.dotcpp.com/oj/train/1090/"
            ],
            "values": [
                "2023年第十四届蓝桥杯大赛软件类决赛C/C++研究生组真题",
                "2023年第十四届蓝桥杯大赛软件类省赛C/C++大学C组真题"
            ],
            "id": 5
        },
        {
            "url": [
                "https://www.dotcpp.com/oj/train/1089/",
                "https://www.dotcpp.com/oj/train/1088/"
            ],
            "values": [
                "2023年第十四届蓝桥杯大赛软件类省赛C/C++大学B组真题",
                "2023年第十四届蓝桥杯大赛软件类省赛C/C++大学A组真题"
            ],
            "id": 6
        },
        {
            "url": [
                "https://www.dotcpp.com/oj/train/1087/",
                "https://www.dotcpp.com/oj/train/1086/"
            ],
            "values": [
                "数据结构-拓扑排序与关键路径",
                "数据结构-最小生成树"
            ],
            "id": 7
        }]
    }

    render() {
        return (
            <div className="recommend clearfix box-content">
                <table className="table tb_pages">
                    <thead>
                        <tr>
                            <th>题集</th>
                            <th>题集</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(item => (
                            <tr key={item.id}>
                                <td><a target="_blank" href={item.url[0]}>{item.values[0]}</a></td>
                                <td><a target="_blank" href={item.url[1]}>{item.values[1]}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div >
        )
    }
}