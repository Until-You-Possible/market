import React from "react";
import {Button, Form, Input} from "antd";
import { ILocation, setPasswordItemList, setPasswordType} from "../dataType/userType";
import { useLocation } from "react-router-dom";
import {userApi} from "../../api/user";
import { Constants } from "../../model/constant";

const ResetPassword:React.FC = () => {

    const location: ILocation = useLocation();
    console.log("location", location);

    const onFinish = (values: any) => {
        console.log("values", values);
        const dataBody: setPasswordType = {
            username    : location?.state?.username,
            passwordNew : values.password,
            forgetToken : localStorage.getItem("token") || ""
        };
        //重置密码
        userApi.resetPassword(dataBody).then(res => {
            if (res.status === Constants.Status.SUCCESS) {
                // 回到成功页面重新登陆

            }
        })
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