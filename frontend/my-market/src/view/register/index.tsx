import React from "react";
import { Form, Input, Button, message} from 'antd';
import "./index.css";
import { registerItemList, registerUserInfo } from "./registerType";
import { userApi } from "../../api/user";
import {Link, useNavigate} from "react-router-dom";



const Register: React.FC = () => {

    const navigate = useNavigate();

    const onFinish = (values: registerUserInfo) => {
        // 相关验证通过之后
        // 这里不在赘述了
        // 此方法也是仅仅处理表单相关的逻辑和业务
        // 注册的话就单独再起方法去写，整体相对清晰
        registerNewAccount(values);
    };

    const registerNewAccount = (values: registerUserInfo) => {
        userApi.Register(values).then(res => {
            // 0 success  1 fail
            if (res.status === 0) {
                message.success("注册成功");
                setTimeout(() => {
                    navigate("/registerSuccess", { replace: true });
                }, 1000);
            }
        });
    }

    // to check if username is exists
    const onBlurCheckName = (item: any) => {
        console.log("item", item);
    }

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
                                onBlur={(item) => onBlurCheckName(item)}
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
                <Link className="accountToLogin" to="/login">
                    已有账号？立即登陆
                </Link>
            </Form.Item>
        </Form>
    </div>
}

export default Register