// 定义用户相关的数据类型
// 登陆登出
// 密码相关
// 用户信息相关

import {
    LockOutlined,
    MailOutlined,
    PhoneOutlined,
    QuestionCircleOutlined,
    QuestionOutlined,
    UserOutlined
} from "@ant-design/icons";
import React from "react";

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
// list type
interface RegisterInfo {
    name       : string,
    rules      : RuleObject[],
    component  : any,
    type?      : string
}

export const LoginItemList:LoginInfo[]  = [
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
];

// login
export interface userLoginInfo  {
    username: string,
    password: string
}

// check username if it is exists

export interface CheckUserNameIsExists {
    type: string,
    str : string
}

// logout response

export interface LogOutType {
    status: number
}

export interface usernameType {
    username: string
}

// check question

export interface CheckQuestionType {
    username: string,
    question: string,
    answer  : string
}


// 重置密码表单
export const setPasswordItemList:passwordInfo[]  = [
    {
        name: "answer",
        rules: [
            {
                required: true,
                message: "请输入新密码"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <UserOutlined className="site-form-item-icon" />,
            placeholder: "请输入新密码"
        }
    },
];

export const registerItemList:RegisterInfo[]  = [
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
        },
        type: "username"
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
    },
    {
        name: "password_confirm",
        rules: [
            {
                required: true,
                message: "请再次输入密码"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <UserOutlined className="site-form-item-icon" />,
            placeholder: "请再次输入密码"
        },
        type: "password"
    },
    {
        name: "phone",
        rules: [
            {
                required: true,
                message: "输入电话"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <PhoneOutlined className="site-form-item-icon" />,
            placeholder: "输入电话"
        }
    },
    {
        name: "email",
        rules: [
            {
                required: true,
                message: "输入邮箱"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <MailOutlined className="site-form-item-icon" />,
            placeholder: "输入邮箱"
        }
    },
    {
        name: "question",
        rules: [
            {
                required: true,
                message: "输入密码提示问题"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <QuestionCircleOutlined className="site-form-item-icon" />,
            placeholder: "输入密码提示问题"
        }
    },
    {
        name: "answer",
        rules: [
            {
                required: true,
                message: "输入密码提示答案"
            }
        ],
        component: {
            type: "INPUT",
            prefix: <QuestionOutlined className="site-form-item-icon" />,
            placeholder: "输入密码提示答案"
        }
    }
]

// register info type

export interface registerUserInfo {
    username         : string,
    password         : string,
    password_confirm : string,
    phone            : number,
    email            : string,
    question         : string,
    answer           : string
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