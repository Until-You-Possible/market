//关于use的接口 (测试版本)

import { http } from "../util/http";
import {
    CheckQuestionType,
    CheckUserNameIsExists,
    LogOutType,
    registerUserInfo,
    usernameType
} from "../dataType/userType";

class UserApi {
    // URLs
    // login
    private loginURL        : string = "/user/login.do";
    // 检查用户名是否存在(有效)
    private checkNameValid  : string = "/user/check_valid.do";
    // register
    private  userRegister   : string = "/user/register.do";
    // 检查登陆状态
    private checkUserLogin     : string = "/user/get_user_info.do";
    // get user's question
    private  userQuestion   : string = "/user/forget_get_question.do";
    // check the answer for last question
    private  userAnswer     : string = "/user/forget_check_answer.do";
    // reset the password
    private  setUserPassword: string = "/user/forget_reset_password.do";
    // get user info
    private userInfoURL     : string = "/user/get_information.do";
    // update personal info
    private updateInfo      : string = "/user/update_information.do";
    // update password when you logged
    private updatedPassword : string = "/user/reset_password.do";
    // log out
    private logOutURL       : string = "/user/logout.do";

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
    public checkUsernameExists(existsUserInfo: CheckUserNameIsExists): Promise<any> {
        return  http.post(this.checkNameValid, existsUserInfo);
    }

    /**
     *  user register
     * @param userRegister
     * @constructor
     */
    public register(userRegister: registerUserInfo): Promise<any> {
        return http.post(this.userRegister, userRegister);
    }

    /**
     * 检查用户登陆状态
     */
    public checkLoginStatus(): Promise<any> {
        return http.post(this.checkUserLogin);
    }

    /**
     * check status of user
     */
    public getCurrentUserInfo(): Promise<any> {
        return http.post(this.userInfoURL);
    }

    /**
     * get question for user
     * @param usernameInfo
     */
    public getUserQuestion(usernameInfo: usernameType): Promise<any> {
        return http.post(this.userQuestion, usernameInfo);
    }

    /**
     * get answer for last question
     * @param userInfo
     */
    public getUserQuestionAnswer(userInfo: CheckQuestionType): Promise<any> {
        return http.post(this.userAnswer, userInfo);
    }

    /**
     * reset the user's password
     * @param userInfo
     */
    public resetPassword(userInfo: any): Promise<any> {
        return http.post(this.setUserPassword, userInfo);
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
    public updatePersonalInfo(userInfo: {}): Promise<any> {
        return http.post(this.updateInfo, userInfo);
    }


    /**
     * update password when user logged
     * @param userInfo
     */
    public updatePasswordLogged(userInfo: {}): Promise<any> {
        return http.post(this.updatedPassword, userInfo);
    }

    /**
     * logout
     */
    public logOut(): Promise<LogOutType> {
        return http.post(this.logOutURL);
    }
}

export const userApi = new UserApi();