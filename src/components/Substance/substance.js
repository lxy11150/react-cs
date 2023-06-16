import { useState, useEffect, useRef } from "react"
import { Pagination } from "antd"
import MyNiukeTable from "../MyNiukeTable/myniuketable"
import MyLuoguTable from "../MyLuoguTable/myLuoguTable"
import MyLikouTable from "../MyLikouTable/myLikouTable"
import { axiosRequest } from '../../utils/axiosRequest';
import { getToken } from "../../utils/getToken";
import './substance.scss'

const Substance = () => {
    const [state, setState] = useState([])
    const [sendNiuke, setSendNiuke] = useState()
    const [sendLuogu, setSendLuogu] = useState()
    const [sendLikou, setSendLikou] = useState()
    const [luogu, setLuogu] = useState()
    const [likou, setLikou] = useState()
    const [flag, setFlag] = useState('牛客网')
    const token = getToken()
    const box = useRef()
    let i = 0;
    let j = 0;
    let k = 0;

    const getContest = async () => {
        const res = await axiosRequest('get', '/competition/GetNiuke', null, token)
        // console.log(res.data.data);
        setState(res.data.data)
        setSendNiuke(res.data.data.slice(0, 20))
    }

    const getLuogu = async () => {
        const res = await axiosRequest('get', '/competition/GetLuoGu', null, token)
        // console.log(res.data.data);
        setLuogu(res.data.data)
        setSendLuogu(res.data.data.slice(0, 20))
    }

    const getLikou = async () => {
        const res = await axiosRequest('get', '/competition/GetLiKou', null, token)
        // console.log(res.data.data);
        setLikou(res.data.data)
        setSendLikou(res.data.data.slice(0, 20))
    }

    const handleChangeNiuke = (e) => {
        i = e * 20
        if (i < state.length) {
            setSendNiuke(state.slice(i - 20, i))
        } else {
            setSendNiuke((state.slice(i - 20, state.length)))
        }
    }

    const handleChangeLuogu = (e) => {
        j = e * 20
        if (j < luogu.length) {
            setSendLuogu(luogu.slice(j - 20, j))
        } else {
            setSendLuogu((luogu.slice(j - 20, luogu.length)))
        }
    }

    const handleChangeLikou = (e) => {
        k = e * 20
        if (k < likou.length) {
            setSendLikou(likou.slice(k - 20, k))
        } else {
            setSendLikou((likou.slice(k - 20, likou.length)))
        }
    }

    const handleClick = (e) => {
        setFlag(e.target.innerHTML)

        if (e.target.innerHTML === '牛客网' || e.target.innerHTML === '<h3>牛客网</h3>') {
            box.current.style.left = '0'
        } else if (e.target.innerHTML === '洛谷' || e.target.innerHTML === '<h3>洛谷</h3>') {
            box.current.style.left = '180px'
        } else if (e.target.innerHTML === '力扣' || e.target.innerHTML === '<h3>力扣</h3>') {
            box.current.style.left = '360px'
        }
    }

    const handleRender = () => {
        if (flag === '牛客网' || flag === '<h3>牛客网</h3>') {
            return (
                <>
                    <MyNiukeTable state={sendNiuke}></MyNiukeTable>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={20}
                        total={state?.length}
                        showSizeChanger={false}
                        showQuickJumper
                        className="pagination"
                        onChange={handleChangeNiuke}
                    ></Pagination>
                </>
            )
        } else if (flag === '洛谷' || flag === '<h3>洛谷</h3>') {
            return (
                <>
                    <MyLuoguTable state={sendLuogu}></MyLuoguTable>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={20}
                        total={luogu?.length}
                        showSizeChanger={false}
                        showQuickJumper
                        className="pagination"
                        onChange={handleChangeLuogu}
                    ></Pagination>
                </>
            )
        } else if (flag === '力扣' || flag === '<h3>力扣</h3>') {
            return (
                <>
                    <MyLikouTable state={sendLikou}></MyLikouTable>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={20}
                        total={likou?.length}
                        showSizeChanger={false}
                        showQuickJumper
                        className="pagination"
                        onChange={handleChangeLikou}
                    ></Pagination>
                </>
            )
        }
    }

    useEffect(() => {
        getContest()
        getLuogu()
        getLikou()
    }, [])

    return (
        <>
            <div className="type_item item1" onClick={handleClick} >
                <h3>牛客网</h3>
            </div>
            <div className="type_item item2" onClick={handleClick} >
                <h3>洛谷</h3>
            </div>
            <div className="type_item item3" onClick={handleClick} >
                <h3>力扣</h3>
            </div>
            <div className="activate" ref={box}></div>
            <div className="sub_item">
                <div className="sub_header clearfix">
                    <h4>
                        已结束比赛信息统计
                        <span style={{ color: 'red', marginLeft: 10 }}>(可以继续提交代码，不计入排名)</span>
                    </h4>
                </div>
                <div className="sub_bor">
                    {handleRender()}
                </div>
            </div>
        </>
    )
}

export default Substance