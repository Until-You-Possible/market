//关于use的接口 (测试版本)

import { http } from "../util/http";
import {
    CheckQuestionType,
    CheckUserNameIsExists,
    LogOutType,
    registerUserInfo,
    usernameType
} from "../dataType/userInfoType";
import { InterfaceDataType } from "../dataType/publicDataType";
import { passwordInfoType } from "../view/personalInfo/childComponent/updatePassword";

class UserApi {
    // URLs
    // login
    private loginURL            : string = "/user/login.do";
    // 检查用户名是否存在(有效)
    private checkNameValidURL   : string = "/user/check_valid.do";
    // register
    private  userRegisterURL    : string = "/user/register.do";
    // 检查登陆状态
    private checkUserLoginURL   : string = "/user/get_user_info.do";
    // get user's question
    private  userQuestionURL    : string = "/user/forget_get_question.do";
    // check the answer for last question
    private  userAnswerURL      : string = "/user/forget_check_answer.do";
    // reset the password
    private  setUserPasswordURL : string = "/user/forget_reset_password.do";
    // get user info
    private userInfoURL         : string = "/user/get_information.do";
    // update personal info
    private updateInfoURL       : string = "/user/update_information.do";
    // update password when you logged
    private updatedPasswordURL  : string = "/user/reset_password.do";
    // log out
    private logOutURL           : string = "/user/logout.do";

    /**
     *  user login
     * @param userData
     */
    public userLogin(userData: any): Promise<any> {
        return  http.post(this.loginURL, userData);
    }

    /**
     *  check username exists
     * @param existsUserInfo
     */
    public checkUsernameExists(existsUserInfo: CheckUserNameIsExists): Promise<InterfaceDataType> {
        return  http.post(this.checkNameValidURL, existsUserInfo);
    }

    /**
     *  user register
     * @param userRegister
     * @constructor
     */
    public register(userRegister: registerUserInfo): Promise<InterfaceDataType> {
        return http.post(this.userRegisterURL, userRegister);
    }

    /**
     * 检查用户登陆状态
     */
    public checkLoginStatus(): Promise<InterfaceDataType> {
        return http.post(this.checkUserLoginURL);
    }

    /**
     * check status of user
     */
    public getCurrentUserInfo(): Promise<InterfaceDataType> {
        return http.post(this.userInfoURL);
    }

    /**
     * get question for user
     * @param usernameInfo
     */
    public getUserQuestion(usernameInfo: usernameType): Promise<InterfaceDataType> {
        return http.post(this.userQuestionURL, usernameInfo);
    }

    /**
     * get answer for last question
     * @param userInfo
     */
    public getUserQuestionAnswer(userInfo: CheckQuestionType): Promise<InterfaceDataType> {
        return http.post(this.userAnswerURL, userInfo);
    }

    /**
     * reset the user's password
     * @param userInfo
     */
    public resetPassword(userInfo: any): Promise<InterfaceDataType> {
        return http.post(this.setUserPasswordURL, userInfo);
    }

    /**
     * get user's status (logging or logout)
     */
    // async getUserStatus(): Promise<any> {
    //     return http.post(this.userMessage);
    // }

    /**
     * update personal info
     * @param userInfo
     */
    public updatePersonalInfo(userInfo: {}): Promise<InterfaceDataType> {
        return http.post(this.updateInfoURL, userInfo);
    }


    /**
     * update password when user logged
     * @param userInfo
     */
    public updatePasswordLogged(userInfo: passwordInfoType): Promise<InterfaceDataType> {
        return http.post(this.updatedPasswordURL, userInfo);
    }

    /**
     * logout
     */
    public logOut(): Promise<LogOutType> {
        return http.post(this.logOutURL);
    }
}

export const userApi = new UserApi();