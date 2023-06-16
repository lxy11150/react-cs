import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosRequest } from '../../../utils/axiosRequest'
import { getToken } from '../../../utils/getToken'
import './competition.scss'

const Competition = (props) => {
    const [data, setData] = useState([])
    const [cla, setCla] = useState([
        "btn_span btn_span_blue",
        "btn_span btn_span_red",
        "btn_span btn_span_gray"
    ])
    const navigate = useNavigate()
    const token = getToken()

    const getCla = (content) => {
        if (content === '未开始') {
            return cla[0]
        } else if (content === '运行中') {
            return cla[1]
        } else {
            return cla[2]
        }
    }

    const handleCla = (types) => {
        if (types === '大赛动态') {
            return cla[0]
        } else if (types === '往期赛事') {
            return cla[1]
        } else {
            return cla[2]
        }
    }

    const getcompetitions = async () => {
        if (props.type === '洛谷') {
            const res = await axiosRequest('get', '/crawl/lg', null, token)
            setData(res.data.data)
        } else if (props.type === 'CodeForce') {
            const res = await axiosRequest('get', '/crawl/cf', null, token)
            setData(res.data.data)
        } else if (props.type === '计算机设计大赛') {
            const res = await axiosRequest('get', '/crawl/jsjdscontent', null, token)
            const datacopy = res.data.data
            if (datacopy) {
                for (let i = 0; i < datacopy.length; i++) {
                    const str = datacopy[i].content
                    if (str) {
                        const arr = str.split('决赛时间：')[1].split(' 决赛地点：');
                        // console.log(arr);
                        const time = arr[0];
                        const locate = arr[1].split(' 决赛承办单位：')[0];
                        const official = arr[1].split(' 决赛承办单位：')[1].split(' ')[0];
                        // console.log('time' + time + 'locate' + locate + 'official' + official);
                        datacopy[i].time = time
                        datacopy[i].locate = locate
                        datacopy[i].official = official
                        // console.log(datacopy[i]);
                    }
                }
            }
            setData(datacopy)
        } else if (props.type === '其它比赛') {
            const res = await axiosRequest('get', '/crawl/jsjdsothers', null, token)
            res.data.data && res.data.data.map(item => {
                if (item.type === 'DSDT') {
                    item.type = '大赛动态'
                } else if (item.type === 'WQSS') {
                    item.type = '往期赛事'
                } else {
                    item.type = '资料下载'
                }
            })
            setData(res.data.data)
        }
    }

    useEffect(() => {
        !token && navigate('/login')
        getcompetitions()
    }, [])

    const handleHead = () => {
        if (props.type === '洛谷') {
            return (
                <tr>
                    <th width="35%">比赛名称</th>
                    <th width="10%">状态</th>
                    <th width="34%">起始时间~结束时间</th>
                    <th width="21%">类型</th>
                </tr>
            )
        } else if (props.type === 'CodeForce') {
            return (
                <tr>
                    <th width="35%">比赛名称</th>
                    <th width="30%">开始时间</th>
                    <th width="35%">持续时间</th>
                </tr>
            )
        } else if (props.type === '计算机设计大赛') {
            return (
                <tr>
                    <th width="20%">决赛地区</th>
                    <th width="30%">比赛主题</th>
                    <th width="20%">决赛时间</th>
                    <th width="15%">决赛地点</th>
                    <th width="15%">决赛承办单位</th>
                </tr>
            )
        } else if (props.type === '其它比赛') {
            return (
                <tr>
                    <th width="70%">比赛名称</th>
                    <th width="30%">类型</th>
                </tr>
            )
        }
    }

    const handleBody = () => {
        if (props.type === '洛谷') {
            if (Array.isArray(data) && data.length > 0) {
                return (
                    data ? data.map((item, index) => (
                        <tr key={index}>
                            <td><div className="cop_name_first"><a target="_blank" href={item.url}>{item.name}</a></div></td>
                            <td><span className={getCla(item.condition)} >{item.condition}</span></td>
                            <td className='align_c'>{item.startEndtime}</td>
                            <td><div className="td_last"><span className={getCla(item.condition)}>{item.nature}</span></div></td>
                        </tr>
                    )) : null
                )
            }
        } else if (props.type === 'CodeForce') {
            if (Array.isArray(data) && data.length > 0) {
                return (
                    data ? data.map((item, index) => (
                        <tr key={index}>
                            <td><div className="cop_name_first"><a target="_blank" href={item.url}>{item.name}</a></div></td>
                            <td className='align_c'>{item.starttime}</td>
                            <td className='align_c'>{item.length}</td>
                        </tr>
                    )) : null
                )
            }
        } else if (props.type === '计算机设计大赛') {
            if (Array.isArray(data) && data.length > 0) {
                return (
                    data ? data.map((item, index) => (
                        <tr key={index} >
                            <td><div className="cop_name_first align_c" style={{ width: 170 }}><a target="_blank" href={item.url}>{item.area}</a></div></td>
                            <td className='align_c'>{item.subject}</td>
                            <td className='align_c'>{item.time}</td>
                            <td className='align_c'>{item.locate}</td>
                            <td className='align_c'>{item.official}</td>
                        </tr>
                    )) : null
                )
            }
        } else if (props.type === '其它比赛') {
            if (Array.isArray(data) && data.length > 0) {
                return (
                    data ? data.map((item, index) => (
                        <tr key={index} >
                            <td>
                                <div className="cop_name_first"
                                    style={{ width: 570 }}
                                >
                                    <a target="_blank" href={item.url}>{item.title}</a>
                                </div>
                            </td>
                            <td><span
                                className={handleCla(item.type)}
                                style={{ marginLeft: 100 }}
                            >
                                {item.type}
                            </span></td>
                        </tr >
                    )) : null
                )
            }
        }
    }
    return (
        <div className="competition clearfix box-content">
            <div className="lg">
                <span>{props.type}</span>
            </div>
            <div className='tb_box'>
                <table className="table tb_pages">
                    <thead>
                        {handleHead()}
                    </thead>
                    <tbody>
                        {handleBody()}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Competition