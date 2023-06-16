import React from "react";
import './article.scss'
import articleImg from '../../../assets/article.png'
import { getNewsList } from "../../../api/NewList";

export default class Article extends React.Component {
    state = {
        data: [{
            "id": 1,
            "values": "「图文教程」私有题库介绍及使用步骤",
            "href": "https://blog.dotcpp.com/a/95405"
        },
        {
            "id": 2,
            "values": "CodeBlocks编译没有反应的原因及解决办法",
            "href": "https://blog.dotcpp.com/a/81658"
        },
        {
            "id": 3,
            "values": "第四届「传智杯」练习赛暨Dotcpp十一月月赛获奖情况公布",
            "href": "https://blog.dotcpp.com/a/81391"
        },
        {
            "id": 4,
            "values": "编程教学过程中教师与学生的矛盾问题点总结",
            "href": "https://blog.dotcpp.com/a/80946"
        },
        {
            "id": 5,
            "values": "优秀视频创作者扶持计划",
            "href": "https://blog.dotcpp.com/a/80867"
        },
        {
            "id": 6,
            "values": "如何利用Dotcpp做编程教学？",
            "href": "https://blog.dotcpp.com/a/79665"
        },
        {
            "id": 7,
            "values": "C语言编译器（编程软件）下载及教程",
            "href": "https://www.dotcpp.com/course/compiler/"
        },
        {
            "id": 8,
            "values": "VC6.0断点调试教程",
            "href": "https://www.dotcpp.com/course/674"
        },
        {
            "id": 9,
            "values": "如何利用Dotcpp做编程教学？",
            "href": "https://blog.dotcpp.com/a/79665"
        }]
    }
    render() {
        return (
            <div className="article clearfix box-content">
                <div className="boxhead">
                    <span id="first">原创文章</span>
                    <span id="second">/ Article</span>
                </div>
                <div className="article_left">
                    <div className="article_img">
                        <a href="http://www.dotcpp.com/wp/847.html" target="_blank">
                            <img src={articleImg} alt="编译器教程" />
                        </a>
                        <span>
                            <a href="http://www.dotcpp.com/wp/847.html" target="_blank">
                                TC2.0编译器下载及入门图文教程</a>
                        </span>
                    </div>
                    <p className="p_article">
                        <a href="//blog.dotcpp.com/a/67493" target="_blank">各编译器（编程软件）下载集合</a>
                    </p>
                    <p className="p_article">
                        <a href="//blog.dotcpp.com/a/9993" target="_blank"> "图文教程"如何创建自己的编程比赛？</a>
                    </p>
                </div>
                <div className="article_right">
                    {this.state.data.map(item => (
                        <p key={item.id} className="p_article">
                            <a href={item.href} target="_blank">{item.values}</a>
                        </p>
                    ))}
                </div>
            </div>
        )
    }
}