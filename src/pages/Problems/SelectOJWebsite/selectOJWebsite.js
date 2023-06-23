import { Space, Select } from "antd"

const SelectOJWebsite = (props) => {
    // 选择网站
    const OJWebsite = ['CodeForces', '洛谷']

    return (
        <div style={{
            position: 'relative',
            float: 'left',
            top: '60px',
            left: '220px',
        }}>
            <Space wrap>
                <Select
                    defaultValue="请选择目标网站"
                    style={{
                        width: 180,
                    }}
                    onChange={props.handleChangeOJ}
                    options={[
                        { value: OJWebsite[0], label: OJWebsite[0] },
                        { value: OJWebsite[1], label: OJWebsite[1] }
                    ]}
                />
            </Space>
        </div>
    )
}

export default SelectOJWebsite