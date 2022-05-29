import React from "react";
import { Form, Input, Button } from 'antd';
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';

interface RuleObject {
    required: boolean,
    message : string
}


interface LoginInfo {
    name       : string,
    rules      : RuleObject[],
    component  : any,
    type?      : string
}

const LoginItemList:LoginInfo[]  = [
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
    }
]


const Register: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return <div className="registerWrap">

        <div className="registerTitle">用户登陆</div>

        <Form
            name="normal_login"
            size="large"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            {
                LoginItemList.map((item) => {
                    return    <div>
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
                    立即登陆
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default Register