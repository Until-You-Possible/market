import React from "react";
import { Form, Input, Button } from 'antd';
import {
    UserOutlined,
    LockOutlined,
    PhoneOutlined,
    MailOutlined,
    QuestionCircleOutlined,
    QuestionOutlined
} from '@ant-design/icons';
import "./index.css";
const Register: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return <div className="registerWrap">
        <div className="registerTitle">新用户注册</div>
        <Form
            name="normal_login"
            size="large"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="请输入密码"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请再次输入密码' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="请再次输入密码"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '输入电话' }]}
            >
                <Input
                    prefix={<PhoneOutlined />}
                    type="password"
                    placeholder="输入电话"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '输入邮箱' }]}
            >
                <Input
                    prefix={<MailOutlined />}
                    type="password"
                    placeholder="输入邮箱"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '输入密码提示问题' }]}
            >
                <Input
                    prefix={<QuestionCircleOutlined />}
                    type="password"
                    placeholder="输入密码提示问题"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '输入密码提示答案' }]}
            >
                <Input
                    prefix={<QuestionOutlined />}
                    type="password"
                    placeholder="输入密码提示答案"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    立即注册
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default Register