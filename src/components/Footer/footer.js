import { QRCode } from 'antd'
import img from '../../assets/developer.png'
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_center">
                <div className="footer_column">
                    <div className="column_title">
                        关于超赛
                    </div>
                    <div className="column_about">
                        本网站旨在收集各竞赛网站的比赛信息，与那些专业的竞赛平台有所区别。
                        基于React-18脚本架的前端框架，和Springboot的后端框架。
                    </div>
                </div>
                <div className="footer_column">
                    <div className="column_title">
                        相关资源
                    </div>
                    <div className="column_about">
                        <a href="https://github.com/lxy11150/react-cs" target='_blank'>前端代码</a>
                        <a href="http://120.26.83.172:3000/agreement">用户协议</a>
                    </div>
                </div>
                <div className="footer_column">
                    <div className="column_title">
                        联系我们
                    </div>
                    <div className="column_about">
                        <span>官方QQ群：532293489</span>
                    </div>
                </div>
                <div className="footer_column">
                    <div className="column_title">
                        加入我们
                    </div>
                    <img src={img} alt="开发者群" />
                </div>
            </div>
        </div>
    )
}

export default Footer