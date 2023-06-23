import { useForm } from 'antd/es/form/Form'
import { Form, Button, Input } from 'antd'
import './recomment.scss'

const Recomment = (props) => {
    const [form] = useForm()
    
    const onFinish = (values) => {
        form.setFieldsValue({ reply: '' })
        props.handleHuifu(values, props.index)
    }
    return (
        <>
            <Form
                form={form}
                className='ans_form'
                onFinish={onFinish}
            >
                <Form.Item
                    name='reply'
                >
                    <Input.TextArea
                        className='ans_text'
                        placeholder={`${props.login}向  @${props.user}回复`}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        发布
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Recomment