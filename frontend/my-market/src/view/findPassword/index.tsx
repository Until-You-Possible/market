import React, {useState} from "react";
import { Button, Form, Input } from "antd";
import { passwordInfo, passwordItemList, questionItemList, usernameType} from "./passwordType";
import { userApi } from "../../api/user";
import { Constants } from "../../model/constant";


const FindPassword: React.FC = () => {

    const [question, setQuestion] = useState<string>("");

    const onFinish = (values: usernameType) => {
        // 根据用户名查询密码提示问题
        userApi.getUserQuestion({ username: values.username}).then(res => {
            if (res.status === Constants.Status.SUCCESS) {
                setQuestion(res.data);
            }
        });
    }

    const renderForm = (list: passwordInfo[]): JSX.Element[] => {
          return list.map((item, index) => {
              return <div key={index}>
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
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        下一步
                    </Button>
                </Form.Item>
            </div>
        })
    }
    return <div className="registerWrap findPasswordWrap">
        <div className="registerTitle">找回密码</div>
        <div className="questionName">
            {
                question ? "密码提示问题为：" + question : null
            }
        </div>
        <div className="questionName">
            {
                question ? "请输入密码提示答案：" : ""
            }
        </div>
        <Form
            name="normal_login"
            size="large"
            className="login-form"
            initialValues={{ remember: false }}
            onFinish={onFinish}
        >
            {
                question ? renderForm(questionItemList) : renderForm(passwordItemList)
            }
        </Form>
    </div>
}

export default FindPassword