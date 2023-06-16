import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    Watermark
} from 'antd';
import img from '../../assets/logo.png'
import './index.scss'
import { axiosRequest } from '../../utils/axiosRequest';
import { useNavigate, Link } from 'react-router-dom'
import { useRef } from 'react';


const { Option } = Select;

const formItemLayout = {
    // label 标签布局，同<Col> 组件，设置 span offset 值，
    // 如 { span: 3, offset: 12} 或 sm: { span: 3, offset: 12 }
    labelCol: {
        //屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
        xs: {
            span: 24,
        },
        //屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
        sm: {
            span: 8,
        },
    },
    //需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8, //栅格左侧的间隔格数，间隔内不可以有栅格
        },
    },
};

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const tip = useRef()

    const onFinish = (values) => {
        console.log('Success:', values);
        let datas = { ...values }
        delete datas.confirm
        postData(datas)
        navigate('/login')
        alert('注册成功，请重新登录！')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const postData = async (datas) => {
        const msg = await axiosRequest('post', '/register', datas)
        console.log(msg)
    }
    const goBack = () => {
        navigate('/login')
    }
    //电话号码前缀选择
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className='login'>
            <Form
                className='form'
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish} //	提交表单且数据验证成功后回调事件
                onFinishFailed={onFinishFailed} //提交表单且数据验证失败后回调事件
                initialValues={{ //表单默认值，只有初始化以及重置时生效
                    prefix: '86',
                }}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError //提交失败自动滚动到第一个错误字段
            >
                {/* 邮箱 */}
                <Form.Item
                    name="email"
                    label="邮箱(E-mail)"
                    rules={[
                        {
                            type: 'email',
                            message: '这不是一个正确的邮箱格式',
                        },
                        {
                            required: true,
                            message: '请输入你的邮箱!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* 密码 */}
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                    //配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用
                    //validateStatus校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                {/* 确认密码 */}
                <Form.Item
                    name="confirm"
                    label="确认密码"
                    // 当字段间存在依赖关系时使用。如果一个字段设置了dependencies属性。
                    //那么它所依赖的字段更新时，该字段将自动触发更新与校验。
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请确认密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次密码输入不一致!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                {/* 用户名 */}
                <Form.Item
                    name="username"
                    label="用户名"
                    tooltip="你希望别人怎么称呼你"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的用户名!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* 性别 */}
                <Form.Item
                    name="gender"
                    label="性别"
                    rules={[
                        {
                            required: true,
                            message: '请选择你的性别!',
                        },
                    ]}
                >
                    <Select placeholder="请选择你的性别">
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                        <Option value="other">其它</Option>
                    </Select>
                </Form.Item>
                {/* 电话号码 */}
                <Form.Item
                    name="phone"
                    label="电话号码"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的电话号码!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                {/* 个性标签 */}
                <Form.Item
                    name="tag"
                    label="个性标签"
                    rules={[
                        {
                            required: true,
                            message: '请描述一下你的个性',
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>
                {/* 验证码 */}
                <Form.Item
                    name="checked"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('必须确认')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        请确认是真人操作
                    </Checkbox>
                </Form.Item>
                {/* 接受协议 */}
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('必须接受协议')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        我接受<Link to={'/agreement'} style={{ color: 'blue' }}>《用户协议》</Link>
                    </Checkbox>
                </Form.Item>
                {/* 注册按钮 */}
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
            <div className="tip" ref={tip} >
                该用户已存在！
            </div>
            <img src={img} alt="" className='img1' />
            <Button className='goback_register' onClick={goBack}>返回登录</Button>
            {/* 水印组件 */}
            <Watermark content="超赛CS">
                <div style={{ height: 500, }} />
            </Watermark>
        </div >
    );
};
export default Register;