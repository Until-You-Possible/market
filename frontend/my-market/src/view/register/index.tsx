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

interface RuleObject {
    required: boolean,
    message : string
}


interface RegisterInfo {
    name       : string,
    rules      : RuleObject[],
    component  : any,
    type?      : string
}

const registerItemList:RegisterInfo[]  = [
    {
        name: "username",
        rules: [
            {
                required: true,
                message: "请输入用户名"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <UserOutlined className="site-form-item-icon" />,
            placeholder: "请输入用户名"
        }
    },
    {
        name: "password",
        rules: [
            {
                required: true,
                message: "请输入密码"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <LockOutlined className="site-form-item-icon" />,
            placeholder: "请输入密码"
        },
        type: "password"
    },
    {
        name: "checkPassword",
        rules: [
            {
                required: true,
                message: "请再次输入密码"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <UserOutlined className="site-form-item-icon" />,
            placeholder: "请再次输入密码"
        },
        type: "password"
    },
    {
        name: "phone",
        rules: [
            {
                required: true,
                message: "输入电话"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <PhoneOutlined className="site-form-item-icon" />,
            placeholder: "输入电话"
        }
    },
    {
        name: "email",
        rules: [
            {
                required: true,
                message: "输入邮箱"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <MailOutlined className="site-form-item-icon" />,
            placeholder: "输入邮箱"
        }
    },
    {
        name: "question",
        rules: [
            {
                required: true,
                message: "输入密码提示问题"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <QuestionCircleOutlined className="site-form-item-icon" />,
            placeholder: "输入密码提示问题"
        }
    },
    {
        name: "answer",
        rules: [
            {
                required: true,
                message: "输入密码提示答案"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <QuestionOutlined className="site-form-item-icon" />,
            placeholder: "输入密码提示答案"
        }
    }
]


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
            {
                registerItemList.map((item,index) => {
                    return    <div key={index}>
                        <Form.Item
                            name={item.name}
                            rules={item.rules}
                        >
                            <Input
                                prefix={item.component.prefix}
                                type={item.type ? item.type : "text"}
                                placeholder={item.component.placeholder}
                            />
                        </Form.Item>
                    </div>
                })
            }
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    立即注册
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default Register