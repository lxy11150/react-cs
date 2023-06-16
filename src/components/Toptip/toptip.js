import React from "react";
import guangbo from '../../assets/guangbo.png'
import './toptip.scss'
import { getNewsList } from "../../api/NewList";

export default class Toptip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                "id": 1,
                "values": "混一天和努力一天，一天看不出任何差别，三天看不到任何变化，七天也看不到任何距离……"
            },
            {
                "id": 2,
                "values": "但是一个月后会看到话题不同，三个月后会看到气场不同，半年后会看到距离不同，一年后会看到人生道路截然不同。"
            },
            {
                "id": 3,
                "values": "请坚信你所喜爱的事物！"
            },
            {
                "id": 4,
                "values": "举办比赛权限已经完全开放，支持老师、个人随时抽题创建校内赛等比赛，达到P2级即可"
            },
            {
                "id": 5,
                "values": "因比赛为公共资源，比赛名称建议包含学校/组织名称具有辨识度，比赛名称、公告不文雅、灌水将被删除比赛并取消权限！"
            },
            {
                "id": 6,
                "values": "世界上有10种人，一种是懂二进制的，另一种是不懂二进制的~"
            },
            {
                "id": 7,
                "values": "题库的题不仅仅支持C语言C++、java，Python和php也可以提交"
            },
            {
                "id": 8,
                "values": "编程小组功能上线！ 欢迎各位老师、社团协会小组负责人申请创建，方便教学、训练！"
            },
            {
                "id": 9,
                "values": "C语言网(Dotcpp.com)奉行“学练同步，知行合一”的学习理念，希望大家都能理论与动手一起加强！拒绝理论派！"
            },
            {
                "id": 10,
                "values": "每月月赛，最后一个周六晚八点开始，请提前预约参赛，参与排名！"
            }],
            transition: false, //是否启用过渡效果
            translate: 0, //当前的偏移量
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.moveUp();
        }, 3000)
    }
    shouldComponentUpdate(nextState) {
        if (nextState.transition === this.state.transition) {
            return false
        }
        return true
    }
    moveUp() { //触发列表上移的动作
        const { items } = this.state
        const firstItem = items[0];
        const newList = [...items.slice(1), firstItem];
        this.setState({
            list: newList,
            transition: true,
            translate: -48, // 一个li的高度
        }, () => { //回调函数，实现将原数组里的第一个元素移至最后一个
            const firstItem = items.shift();
            items.push(firstItem);
        });
        setTimeout(() => { //取消过渡效果和偏移量，使得列表回到原来的位置。
            this.setState({
                transition: false,
                translate: 0,
            });
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);  //消除组件时清除定时器
    }

    render() {
        return (
            <div className="toptip clearfix" >
                <img src={guangbo} alt="比赛公告" className='guangbo' />
                <ul
                    style={{
                        transform: `translateY(${this.state.translate}px)`,
                        transition: this.state.transition ? 'all 0.5s ease' : '',
                    }}
                >
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.values}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

