import { UserOutlined } from "@ant-design/icons";
import React from "react";

interface RuleObject {
    required: boolean,
    message : string
}

export interface passwordInfo {
    name       : string,
    rules      : RuleObject[],
    component  : any,
    type?      : string
}

export const passwordItemList:passwordInfo[]  = [
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
];

export const questionItemList:passwordInfo[]  = [
    {
        name: "answer",
        rules: [
            {
                required: true,
                message: "请输入密码提示问题答案"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <UserOutlined className="site-form-item-icon" />,
            placeholder: "请输入密码提示问题答案"
        }
    },
];


export interface usernameType {
    username: string
}