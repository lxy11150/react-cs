import { useState, useEffect } from 'react'
import { DoubleRightOutlined } from '@ant-design/icons'
import { axiosRequest } from '../../utils/axiosRequest'
import { getToken } from '../../utils/getToken'
import './menu.scss'

const Menus = () => {
    const [blueBridge, setBlueBridge] = useState() //蓝桥杯
    const [challenge, setChallenge] = useState() //挑战杯
    const [tournament, setTournament] = useState() //天梯赛
    const [CCF, setCCF] = useState() //大学生计算机程序与设计大赛
    const [cccc, setCccc] = useState() //计算机设计大赛
    const [entrepreneurship, setEntrepreneurship] = useState() //创新创业大赛
    const token = getToken()

    //获取蓝桥杯数据
    const getLanQiao = async () => {
        const res = await axiosRequest('get', '/competition/GetLanQiaoBei', null, token)
        // console.log(res.data.data);
        setBlueBridge(res.data.data)
    }

    //获取挑战杯数据
    const getChallenge = async () => {
        const res = await axiosRequest('get', '/competition/GetChallengeCup', null, token)
        // console.log(res.data.data);
        setChallenge(res.data.data.slice(0, 10))
    }

    //获取天梯赛数据
    const getTournament = async () => {
        const res = await axiosRequest('get', '/competition/GetTournament', null, token)
        // console.log(res.data.data);
        setTournament(res.data.data.slice(0, 10))
    }

    //获取CCF数据
    const getCCF = async () => {
        const res = await axiosRequest('get', '/competition/GetCCF', null, token)
        // console.log(res.data.data);
        setCCF(res.data.data.slice(0, 10))
    }

    //获取计算机设计大赛数据
    const getCccc = async () => {
        const res = await axiosRequest('get', '/competition/GetCCCC', null, token)
        // console.log(res.data.data);
        setCccc(res.data.data.slice(0, 10))
    }

    //获取创新创业大赛数据
    const getEntrepreneurship = async () => {
        const res = await axiosRequest('get', '/competition/GetEntrepreneurship', null, token)
        // console.log(res.data.data);
        setEntrepreneurship(res.data.data.slice(0, 10))
    }

    //钩子函数
    useEffect(() => {
        getLanQiao()
        getChallenge()
        getTournament()
        getCCF()
        getCccc()
        getEntrepreneurship()
    }, [])

    return (
        <div className="menus clearfix">
            {/* 蓝桥杯 */}
            <div className="news_card f_left clearfix">
                <div className="news_card_header blue">
                    <span className='title'>蓝桥杯大赛通知</span>
                    <a href="https://dasai.lanqiao.cn/notices/?progid=20" className='link' target='_blank'>查看更多
                        <DoubleRightOutlined />
                    </a>
                </div>
                <div className="news_card_body">
                    <ul className='clearfix'>
                        {blueBridge?.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} target='_blank'>
                                    <span className='news_title'>{item.title}</span>
                                    <span className='time'>{item.time}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 挑战杯 */}
            <div className="news_card f_right clearfix">
                <div className="news_card_header purple">
                    <span className='title'>挑战杯赛事通知</span>
                    <a href="https://www.tiaozhanbei.net/tzb/notice" className='link' target='_blank'>查看更多
                        <DoubleRightOutlined />
                    </a>
                </div>
                <div className="news_card_body">
                    <ul className='clearfix'>
                        {challenge?.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} target='_blank'>
                                    <span className='news_title'>{item.title}</span>
                                    <span className='time'>{item.date}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 天梯赛 */}
            <div className="news_card f_left clearfix">
                <div className="news_card_header green">
                    <span className='title'>天梯赛竞赛通知</span>
                    <a href="https://gplt.patest.cn/notification" className='link' target='_blank'>查看更多
                        <DoubleRightOutlined />
                    </a>
                </div>
                <div className="news_card_body">
                    <ul className='clearfix'>
                        {tournament?.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} target='_blank'>
                                    <span className='news_title'>{item.title}</span>
                                    <span className='time'>{item.date}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* CCF */}
            <div className="news_card f_right clearfix">
                <div className="news_card_header orange">
                    <span className='title'>CCF通知公告</span>
                    <a href="https://www.ccf.org.cn/ccsp/tzgg/" className='link' target='_blank'>查看更多
                        <DoubleRightOutlined />
                    </a>
                </div>
                <div className="news_card_body" style={{ height: 392 }}>
                    <ul className='clearfix'>
                        {CCF?.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} target='_blank'>
                                    <span className='news_title'>{item.title}</span>
                                    <span className='time'>{item.time}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 4C */}
            <div className="news_card f_left clearfix">
                <div className="news_card_header red">
                    <span className='title'>中国大学生计算机设计大赛动态</span>
                    <a href="http://jsjds.blcu.edu.cn/dsdt.htm" className='link' target='_blank'>查看更多
                        <DoubleRightOutlined />
                    </a>
                </div>
                <div className="news_card_body">
                    <ul className='clearfix'>
                        {cccc?.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} target='_blank'>
                                    <span className='news_title'>{item.title}</span>
                                    <span className='time'>{item.date}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 创新创业 */}
            <div className="news_card f_right clearfix">
                <div className="news_card_header pink">
                    <span className='title'>大学生创新创业大赛动态</span>
                    <a href="https://cy.ncss.cn/information/ssdt" className='link' target='_blank'>查看更多
                        <DoubleRightOutlined />
                    </a>
                </div>
                <div className="news_card_body">
                    <ul className='clearfix'>
                        {entrepreneurship?.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} target='_blank'>
                                    <span className='news_title'>{item.title}</span>
                                    <span className='time'>{item.date}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Menus