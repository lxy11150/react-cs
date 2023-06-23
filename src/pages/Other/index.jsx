import React from "react"
import './index.scss'

const Other = () => {
    return (
        <div className="other">
            <div className="container">
                <div className="claim">
                    <h1>网站声明</h1>
                    <p className="cl_p">本网站旨在收集各竞赛网站的比赛信息，与那些专业的竞赛平台有所区别。</p>
                    <p className="cl_p">网站项目属于开源项目，限于项目开发者的能力有限，网站的诸多缺陷还望海涵。
                        同时欢迎志同道合的朋友参与开发，优化项目代码，或给予宝贵的建议。
                    </p>
                </div>
                <div className="introduce">
                    <h1>网站介绍</h1>
                    <div className="display">
                        <div className="int_display int_right">
                            <p>前端使用 React 脚本架进行开发，React 是一个流行的 JavaScript 库，
                                用于构建用户界面。它提供了组件化开发的能力，使开发者能够更轻松地构
                                建可复用和交互性强的界面。通过使用 React，前端开发者可以创建动态的
                                用户界面，实现数据的展示和用户交互。</p>
                        </div>
                        <div className="int_display int_left">
                            <p>后端采用 Spring Boot 框架进行开发，Spring Boot 是一个用于快速构建
                                Java 应用程序的框架。它提供了开箱即用的配置和自动化，简化了应用程序
                                的开发和部署过程。Spring Boot 提供了丰富的功能和组件，包括处理 HTTP
                                请求、数据持久化、安全性等，使开发者能够高效地构建可靠的后端服务。</p>
                        </div>
                    </div>
                </div>
                <div className="document">
                    <h1>开发文档</h1>
                    <ul>
                        <li>
                            <a href="https://rq5e7mtqimd.feishu.cn/docx/WaZTdVBy0o07kpxw7shcDR72nhf">
                                测试文档
                            </a>
                        </li>
                        <li>
                            <a href="https://u0nyyr9p66r.feishu.cn/docx/HaladRXSqovrMzxtndecBskunbd?from=from_copylink">
                                接口文档
                            </a>
                        </li>
                        <li>
                            <a href="https://www.kdocs.cn/l/coZw82cRJEsM">
                                设计文档
                            </a>
                        </li>
                        <li>
                            <a href="https://u0nyyr9p66r.feishu.cn/docx/L51Vd9lAkodH2RxttdTcgkd6nfd">
                                需求文档
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Other