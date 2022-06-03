import React from "react";
import { Form, Input, Button } from 'antd';
import { LoginItemList, userLoginInfo } from "./loginType";
import { userApi } from "../../api/user";




const Register: React.FC = () => {

    const onFinish = (values: userLoginInfo) => {
        userLogin(values);
    };

    const userLogin = (values: userLoginInfo) => {
        userApi.userLogin(values).then(res => {
            console.log("res", res);
        });
    }

    return <div className="registerWrap">

        <div className="registerTitle">用户登陆</div>
        <Form
            name="normal_login"
            size="large"
            className="login-form"
            initialValues={{ remember: false }}
            onFinish={onFinish}
        >
            {
                LoginItemList.map((item, index) => {
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
                    立即登陆
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default Register