import React, {CSSProperties, Fragment, useState} from "react";
import { Button, Card, Form, Input, Spin } from "antd";
import { helper } from "../../../util/helper";
import { userApi } from "../../../api/user";
import { useNavigate } from "react-router-dom";
import {Constants} from "../../../model/constant";

const buttonStyle: CSSProperties = {
    width : "100%",
}

export type passwordInfoType = {
    passwordOld      : string,
    passwordNew      : string,
    passwordConfirm? : string
}

const UpdatePassword: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigate();

    const onFinish = (values: passwordInfoType) => {
        const newPassword = values.passwordNew;
        const confirmPassword = values.passwordConfirm;
        if (newPassword !== confirmPassword) {
            helper.showMessage("两次输入密码不一致，请重新输入");
            // 清空密码
            return;
        }

        const passwordInfo: passwordInfoType = {
            passwordOld : values.passwordOld,
            passwordNew : values.passwordNew
        }
        setLoading(true);
        setTimeout(() => {
            userApi.updatePasswordLogged(passwordInfo).then(res => {
                if (helper.successResponse(res)) {
                    setLoading(false);
                    helper.showMessage("密码已经更新成功～请重新登陆");
                    setTimeout(() => {
                        // 到成功页面登陆
                        navigation("/resultSuccess?successPageType=" + Constants.SuccessPageEnum.UPDATEPASSWORD);
                    }, 1000);
                }
            });
        }, 1500);
    }

    return <Fragment>
        <div>
            <Card title="修改密码" bordered={false} >
                <Spin spinning={loading}>
                    <Form
                        name="basic"
                        size="large"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 12 }}
                        initialValues={{ remember: false }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="原始密码"
                            name="passwordOld"
                            rules={[{ required: true, message: 'Please input your 原始密码!' }]}
                        >
                            <Input   />
                        </Form.Item>
                        <Form.Item
                            label="新密码"
                            name="passwordNew"
                            rules={[{ required: true, message: 'Please input your 新密码!' }]}
                        >
                            <Input   />
                        </Form.Item>
                        <Form.Item
                            label="确认密码"
                            name="passwordConfirm"
                            rules={[{ required: true, message: 'Please input your 确认密码!' }]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
                            <Button style={buttonStyle} type="primary" htmlType="submit">
                                提交修改
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Card>
        </div>
    </Fragment>
}


export default UpdatePassword;
