import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import { Button, Card, Form, Input, Spin } from "antd";
import { userApi } from "../../../api/user";
import { helper } from "../../../util/helper";
import { UpdatedUserInfoType } from "../../../dataType/userType";

const buttonStyle: CSSProperties = {
    width : "100%",
}

const PersonMessage: React.FC = () => {

    const [form] = Form.useForm();

    const [loading, setLoading] = useState<boolean>(true);

    let [currentDisabledStatus, setCurrentDisabledStatus] = useState<boolean>(true);

    // get user info
    useEffect(() => {
        setTimeout(() => {
            userApi.getCurrentUserInfo().then(res => {
                if (helper.successResponse(res)) {
                    form.setFieldsValue(res.data);
                    setLoading(false);
                }
            });
        }, 1500);
    }, []);

    const onFinish = (values: any) => {
        if (currentDisabledStatus) {
            setCurrentDisabledStatus(false);
            return;
        }

        const userInfo: UpdatedUserInfoType = {
            phone    : values.phone,
            email    : values.email,
            question : values.question,
            answer   : values.answer
        }
        // update information
        setLoading(true);
        setTimeout(() => {
            userApi.updatePersonalInfo(userInfo).then(res => {
                if (helper.successResponse(res)) {
                    helper.showMessage(res.msg);
                    setCurrentDisabledStatus(true);
                    setLoading(false);
                }
            });
        }, 1500);
    };

    return <Fragment>
        <div>
            <Card title="我的信息" bordered={false} >
                <Fragment>
                    <Spin spinning={loading}>
                        <Form
                            name="basic"
                            labelCol={{ span: 2 }}
                            wrapperCol={{ span: 12 }}
                            form={form}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input disabled  />
                            </Form.Item>

                            <Form.Item
                                label="电话"
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone!' }]}
                            >
                                <Input disabled={currentDisabledStatus}  />
                            </Form.Item>

                            <Form.Item
                                label="邮箱"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input disabled={currentDisabledStatus}  />
                            </Form.Item>

                            <Form.Item
                                label="问题"
                                name="question"
                                rules={[{ required: true, message: 'Please input your question!' }]}
                            >
                                <Input disabled={currentDisabledStatus}  />
                            </Form.Item>

                            <Form.Item
                                label="答案"
                                name="answer"
                                rules={[{ required: true, message: 'Please input your answer!' }]}
                            >
                                <Input disabled={currentDisabledStatus}  />
                            </Form.Item>


                            <Form.Item wrapperCol={{ offset: 2, span: 12 }}>
                                <Button style={buttonStyle} type="primary" htmlType="submit">
                                    {
                                        currentDisabledStatus ? "编辑" : "提交修改"
                                    }
                                </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </Fragment>
            </Card>
        </div>
    </Fragment>
}

export default PersonMessage;