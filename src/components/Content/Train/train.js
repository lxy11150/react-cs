import React from 'react'
import './train.scss'

export default class Train extends React.Component {
    state = {
        data: [{
            "url": "https://www.dotcpp.com/oj/problem1991.html",
            "number": "1991",
            "name": "面向对象设计之时间类",
            "type": "编程练习",
            "level": "入门题",
            "solved": "296",
            "submitted": "597"
        },
        {
            "url": "https://www.dotcpp.com/oj/problem1158.html",
            "number": "1158",
            "name": "作业调度方案",
            "type": "ACM训练",
            "level": "中等题",
            "solved": "329",
            "submitted": "603"
        },
        {
            "url": "https://www.dotcpp.com/oj/problem1279.html",
            "number": "1279",
            "name": " [NOIP2008T2]火柴棒等式",
            "type": "OI赛题",
            "level": "难题",
            "solved": "77",
            "submitted": "177"
        },
        {
            "url": "https://www.dotcpp.com/oj/problem1530.html",
            "number": "1530",
            "name": "蓝桥杯算法提高VIP-数字黑洞",
            "type": "蓝桥杯",
            "level": "简单题",
            "solved": "1240",
            "submitted": "1915"
        },
        {
            "url": "https://www.dotcpp.com/oj/problem1672.html",
            "number": "1672",
            "name": "迷宫问题",
            "type": "数据结构",
            "level": "中等题",
            "solved": "939",
            "submitted": "3793"
        },
        {
            "url": "https://www.dotcpp.com/oj/problem1068.html",
            "number": "1068",
            "name": "二级C语言-温度转换",
            "type": "计算机二级",
            "level": "简单题",
            "solved": "11165",
            "submitted": "6679"
        }],
        levelColor: [
            "btn label btn_basic",
            "btn label btn_easy",
            "btn label btn_medium",
            "btn label btn_hard",
            "btn-unknow_color",
            "btn-light_purple"
        ]
    }
    getLevelColor(level) {
        const { levelColor } = this.state;
        if (level === '入门题') {
            return levelColor[0]
        } else if (level === '简单题') {
            return levelColor[1]
        } else if (level === '中等题') {
            return levelColor[2]
        } else {
            return levelColor[3]
        }
    }
    getTypeColor(type) {
        const { levelColor } = this.state;
        if (type === '编程练习') {
            return levelColor[0]
        } else if (type === '计算机二级') {
            return levelColor[1]
        } else if (type === 'ACM训练') {
            return levelColor[2]
        } else if (type === 'OI赛题') {
            return levelColor[3]
        } else if (type === '蓝桥杯') {
            return levelColor[4]
        } else if (type === '数据结构') {
            return levelColor[5]
        }
    }
    render() {
        return (
            <div className="train clearfix box-content">
                <table className="table tb_pages">
                    <thead>
                        <tr>
                            <th width="8%">题号</th>
                            <th width="35%">题目名称</th>
                            <th width="14%" className='align_l'>类型</th>
                            <th width="15%" className='align_l'>难度</th>
                            <th width="12%">已解决</th>
                            <th width="16%">已提交</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(item => (
                            <tr key={item.number}>
                                <td><div className="tb_first">{item.number}</div></td>
                                <td><span >
                                    <a target="_blank" href={item.url}>{item.name}</a>
                                </span></td>
                                <td><button target="_blank" className={this.getTypeColor(item.type)}>{item.type}</button></td>
                                <td><button target="_blank" className={this.getLevelColor(item.level)}>{item.level}</button></td>
                                <td className='align_c'>{item.solved}</td>
                                <td><div className="align_c tb_last">{item.submitted}</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
}