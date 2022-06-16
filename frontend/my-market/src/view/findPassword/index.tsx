import React, {useState} from "react";
import { Button, Form, Input } from "antd";
import { userApi } from "../../api/user";
import { Constants } from "../../model/constant";
import { CheckQuestionType, passwordInfo, passwordItemList, questionItemList, usernameType } from "../dataType/userType";
import { useNavigate } from "react-router-dom";
import {helper} from "../../util/helper";


const FindPassword: React.FC = () => {

    const navigate = useNavigate();

    const [question, setQuestion] = useState<string>("");

    const [currentName, setCurrentName] = useState<string>();

    const onFinish = (values: usernameType | CheckQuestionType) => {
        // 根据用户名查询密码提示问题
        if (!question) {
            setCurrentName(values.username);
            userApi.getUserQuestion({ username: values.username}).then(res => {
                if (helper.successResponse(res)) {
                    setQuestion(res.data);
                }
            });
        }
        if (question) {
            // 校验问题密码
            if ("answer" in values) {
                const userMessage: CheckQuestionType = {
                    username: currentName || "",
                    question: question,
                    answer: values.answer
                }
                userApi.getUserQuestionAnswer(userMessage).then(res => {
                    if (helper.successResponse(res)) {
                        window.localStorage.setItem("token", res.data);
                        navigate("/resetPassword", {
                            state: {
                                username: currentName
                            }
                        });
                    }
                });
            }
        }
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