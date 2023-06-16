import React from "react";
import Article from "./Article/article";
import Competition from "./Competition/competition";
import Train from "./Train/train"
import Recommend from "./Recommend/recommend";
import './content.scss'

export default class Content extends React.Component {
    render() {
        return (
            <div className="content clearfix">
                <Article></Article>
                <Competition type={'洛谷'}></Competition>
                <Competition type={'CodeForce'}></Competition>
                <Competition type={'计算机设计大赛'}></Competition>
                <Competition type={'其它比赛'}></Competition>
                <Train></Train>
                <Recommend></Recommend>
            </div>
        )
    }
}