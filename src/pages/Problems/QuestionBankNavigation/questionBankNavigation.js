import { Drawer, Button } from "antd";
import { useState } from "react";

// 网站图标 + 顶部导航栏 + 头像 + 侧边栏开关
const QuestionBankNavigation = () => {
    // 用户头像顶部显示的消息数量
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            {/* 侧边弹出框 */}
            <div>
                <Button type="primary" onClick={showDrawer} style={{
                    position: 'relative',
                    float: 'left',
                    top: 17,
                    left: 1300,
                }}>
                    今日计划
                </Button>
                <Drawer title="今天的计划" placement="right" onClose={onClose} open={open}>
                    ...
                </Drawer>
            </div>
        </>
    )
}

export default QuestionBankNavigation