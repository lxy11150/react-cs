import {
    Layout, Button, Transfer, List, Select, Space,
    Col, Row, Statistic,
} from "antd"
import QuestionBankNavigation from "./QuestionBankNavigation/questionBankNavigation";
import SelectOJWebsite from "./SelectOJWebsite/selectOJWebsite";
import { ArrowUpOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router'
import axios from "axios"
import "./index.scss"

const { Header, Content } = Layout

export default function QuestionBank() {
    const navigate = useNavigate()
    const [selectOJ, setSelectOJ] = useState('')
    // 选择哪个 OJ 网站
    const handleChangeOJ = (value) => {
        if (value === 'CodeForces') {
            setSelectOJ('CFQuestions')
        } else if (value === '洛谷') {
            setSelectOJ('LuoGuQuestions')
        }
    }

    const [mockData, setMockData] = useState([]);
    const [targetKeys, setTargetKeys] = useState([]);
    const [page, setPage] = useState(1)
    const tempTargetKeys = [];
    const tempMockData = [];

    // 关键字穿梭框 + 筛选
    const SelectKeywords = () => {

        const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
        const handleChange = (newTargetKeys) => {
            setTargetKeys(newTargetKeys);
        };
        const handleSearch = (dir, value) => {
            console.log('search:', dir, value);
        };

        // 点击按钮时，清空 data，并重新加载
        const onClickSubmit = async () => {
            setData([])
            let numKeywords = ''
            // 把所有关键字放在一起
            for (let i = 0; i < targetKeys.length; i++) {
                numKeywords += targetKeys[i]
            }
            axios.request({
                method: "GET",
                url: `http://120.26.83.172:8080/questionBank/get${selectOJ}/${numKeywords}/1/40`,
            }).then(response => {
                setData([...response.data.data.records])
                console.log(response.data.data.records);
            })
            setPage(page + 1)
        }

        return (
            <div>
                {/* 这个 div 用于选择题目类型的标签 */}
                <div style={{
                    position: 'absolute',
                    float: 'left',
                }}>
                    {/* 穿梭框 */}
                    <Transfer
                        dataSource={mockData}
                        showSearch
                        filterOption={filterOption}
                        targetKeys={targetKeys}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        render={(item) => item.title}
                        listStyle={{
                            width: 250,
                            height: 300,
                        }}
                        style={{
                            position: 'absolute',
                            float: 'left',
                            left: '450px',
                            top: 10,
                        }}
                    />

                    {/* 提交数据按钮 */}
                    <div style={{
                        position: 'absolute',
                        float: 'left',
                        left: '1000px',
                        top: '277px',
                    }}>
                        <Button onClick={onClickSubmit} type="primary" icon={<SearchOutlined />}>筛选</Button>
                    </div>
                </div>
            </div>
        )
    }

    // 选择题目的类型标签
    const getMock = () => {
        // 添加数据
        const questionsLabel = ['全部', '数组', '字符串', '哈希表', '数学', '排序', '贪心', '树']
        for (let i = 0; i < questionsLabel.length; ++i) {
            const data = {
                key: i.toString(),
                title: questionsLabel[i],
                description: questionsLabel[i],
                chosen: 0,
            }
            if (data.chosen) {
                tempTargetKeys.push(data.key)
            }
            tempMockData.push(data)
        }
        setMockData(tempMockData);
        setTargetKeys(tempTargetKeys);
    };

    useEffect(() => {
        getMock()
    }, [])

    // 题目列表
    const [data, setData] = useState([]);
    const QuestionList = () => {
        //点击按钮时加载
        const loadMoreData = () => {
            let numKeywords = ''
            // 把所有关键字放在一起
            for (let i = 0; i < targetKeys.length; i++) {
                numKeywords += ',' + targetKeys[i]
            }
            axios.request({
                method: "GET",
                url: `http://120.26.83.172:8080/questionBank/get${selectOJ}/${numKeywords}/${page}/40`,
            }).then(response => {
                setData([...data, ...response.data.data.records])
                console.log('data: ' + data);
            })
            setPage(page + 1)
        };

        // // 点击题目文字时，跳转到答题页面，并把题目信息携带过去
        // const handleClickQuestion = (event) => {
        //     const id = event.target.id
        //     const text = event.target.textContent
        //     navigate('/answerPage', { state: { id: id, text: text } })
        // }

        return (
            <div>
                <List
                    className="list clearfix"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item key={item.email}>
                            <List.Item.Meta
                                avatar={<h4>{index + 1}</h4>}
                                title={
                                    <p id={item.id} key={index + 1}>
                                        <a href={item.questionurl ? item.questionurl : item.url} target="_blank" >
                                            {sliceContent(item.content)}
                                        </a>
                                    </p>
                                }
                                description={
                                    <Button
                                        href={item.questionurl ? item.questionurl : item.url}
                                        target="_blank"
                                        type="primary"
                                        icon={<ArrowUpOutlined />}
                                        size="small"
                                    >跳转到题目来源</Button>
                                }
                            />
                        </List.Item>
                    )}
                >
                    <Button
                        onClick={loadMoreData}
                        style={{
                            position: 'absolute',
                            float: 'left',
                            left: 350,
                        }}
                    >加载更多</Button>
                </List>
            </div>
        )
    }

    return (
        <div className="pro_box clearfix">
            <Header style={{
                backgroundColor: '#FFFFFF',
                height: '70px',
            }}>
                <QuestionBankNavigation />
            </Header>
            <Content className="clearfix">
                {/* 用来选择题目信息 */}
                <div style={{
                    position: 'relative',
                    float: 'left',
                }}>
                    <SelectOJWebsite handleChangeOJ={handleChangeOJ} />
                    <SelectKeywords />
                </div>

                {/* 用来装题目列表（左侧）、当前进度（右侧）和我的计划（右侧） */}
                <div className='question_list'>
                    {/* 题目列表 */}
                    <div id="scrollableDiv">
                        <QuestionList />
                    </div>
                </div>
            </Content>
        </div>
    )
}

function sliceContent(content) {
    if (content.length <= 100)
        return content

    return content.slice(0, 100) + '...'
}