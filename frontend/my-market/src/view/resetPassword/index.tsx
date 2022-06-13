import React from "react";
import {Button, Form, Input} from "antd";
import { setPasswordItemList } from "../dataType/userType";


const ResetPassword:React.FC = () => {

    const onFinish = (values: any) => {
        console.log("values", values);
    }

    return <div className="registerWrap">
        <div className="registerTitle">找回密码</div>
        <div className="questionName">请输入新密码:</div>
        <Form
            name="normal_login"
            size="large"
            className="login-form"
            initialValues={{ remember: false }}
            onFinish={onFinish}
        >
            {
                setPasswordItemList.map((item, index) => {
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
                    提交
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default ResetPassword