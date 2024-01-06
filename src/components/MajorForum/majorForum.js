import { ReadOutlined, FileTextOutlined,GlobalOutlined } from '@ant-design/icons'
import './majorForum.scss'


const MajorForum = () => {
    return (
        <div className="major-forum">
            <div className="major_head">
                <ReadOutlined />
                <span className='title'>专业论坛</span>
            </div>
            <div className="major_body">
                {/* Stack Overflow */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://stackoverflow.com/" target='_blank' >Stack Overflow</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        全球性的开发者社区，有数百万的注册用户，欢迎你的到来
                    </div>
                </div>
                {/* Hacker News */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://news.ycombinator.com/" target='_blank' >Hacker News</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        面向技术和创业社区的新闻聚合网站，涵盖技术、编程、创业、计算机安全等领域。
                    </div>
                </div>
                {/* CodeProject */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://www.codeproject.com/" target='_blank' >CodeProject</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        面向开发者的在线社区和资源平台，旨在提供有关软件开发、编程和技术的文章、教程、示例代码和工具。
                    </div>
                </div>
                {/* GeekWire */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://www.geekwire.com/" target='_blank' >GeekWire</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        GeekWire是一个科技新闻和分析网站，致力于报道科技行业的新闻、创业公司、创新技术和科技趋势等内容。
                    </div>
                </div>
                {/* CSDN社区 */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://bbs.csdn.net/?spm=1000.2115.3001.6068" target='_blank' >CSDN社区</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        中国最大的技术社区和知识分享平台之一。它为开发者、程序员、IT专业人士等提供丰富的技术文章、教程、博客、论坛等资源。
                    </div>
                </div>
                {/* Dev.to */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://dev.to/" target='_blank' >Dev.to</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        Dev.to 是充满活力的技术社区，为开发者提供了一个分享、学习和互动的平台，使他们能够深入探讨技术话题、连接其他开发者。
                    </div>
                </div>
                {/* 飞桨开发者论坛 */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://aistudio.baidu.com/paddle/forum" target='_blank' >飞桨开发者论坛</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        深度学习？飞桨？前沿技术？奇思妙想不嫌多，畅所欲言不设限
                    </div>
                </div>
                {/* PyTorch论坛 */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://discuss.pytorch.org/" target='_blank' >PyTorch论坛</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        探索深度学习世界，共享PyTorch热爱
                    </div>
                </div>
                {/* 华为开发者论坛 */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://developer.huawei.com/consumer/cn/forum/" target='_blank' >华为开发者论坛</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        连接创新，共享未来——华为开发者论坛，激发你的技术潜能！
                    </div>
                </div>
                {/* 鸿蒙开发者论坛 */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://www.harm-os.com/" target='_blank' >鸿蒙开发者论坛</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        在鸿蒙开发者论坛，没有人能够熄灭满天星光。
                    </div>
                </div>
                {/* 软件开发者论坛 */}
                <div className="major_body_item">
                    <div className="m_b_item_head">
                        <span className='color_bar' ></span>
                        <div className="title">
                            <a href="https://cloud.tencent.com/developer/information/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E8%80%85%E8%AE%BA%E5%9D%9B-article" target='_blank' >软件开发者论坛</a>
                        </div>
                        <div className="reply">
                            <GlobalOutlined />
                        </div>
                    </div>
                    <div className="m_b_item_body">
                        连接软件开发者，分享知识，共创未来。
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MajorForum