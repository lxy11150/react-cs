import React from "react";
import './index.scss'

const MyContest = () => {

    return (
        <div className="my-contest">
            <div class="empty">
                <div class="empty-title">您暂未参加比赛</div>
                <div class="empty-desc">您可以通过
                    <a href="/home/contest" class="ai-studio-link">
                        比赛首页
                    </a>
                    ，查看并参加比赛哦
                </div>
            </div>
        </div>
    )
}

export default MyContest