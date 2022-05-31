//关于use的接口 (测试版本)

import { http } from "../util/http";

export type UserDataType = {
    username : string,
    password : string
}

class UserApi {
    // URLs
    // login
    private loginURL        : string = "/user/login.do";
    // check login
    private checkLogin      : string = "/user/check_valid.do";
    // register
    private  userRegister   : string = "/user/register.do";
    // check status of user
    private userStatus      : string = "/user/get_user_info.do";
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
    async userLogin(userData: UserDataType): Promise<any> {
        return http.post(this.loginURL, userData);
    }

    /**
     *  check user login
     * @param username
     */
    async checkUserLogin(username: string): Promise<any> {
        return http.post(this.checkLogin, username);
    }

    /**
     *  user register
     * @param userRegister
     * @constructor
     */
    async Register(userRegister: {}): Promise<any> {
        return http.post(this.checkLogin, userRegister);
    }

    /**
     * check status of user
     * @param userInfo
     */
    async checkLoginStatus(userInfo: {}): Promise<any> {
        return http.post(this.userStatus, userInfo);
    }

    /**
     * get question for user
     * @param username
     */
    async getUserQuestion(username: string): Promise<any> {
        return http.post(this.userQuestion, username);
    }

    /**
     * get answer for last question
     * @param userInfo
     */
    async getUserQuestionAnswer(userInfo: {}): Promise<any> {
        return http.post(this.userAnswer, userInfo);
    }

    /**
     * reset the user's password
     * @param userInfo
     */
    async resetPassword(userInfo: {}): Promise<any> {
        return http.post(this.setUserPassword, userInfo);
    }

    /**
     * get user' info
     */
    async getUserInfo(): Promise<any> {
        return http.post(this.userInfoURL);
    }

    /**
     * update personal info
     * @param userInfo
     */
    async updatePersonalInfo(userInfo: {}): Promise<any> {
        return http.post(this.updateInfo, userInfo);
    }


    /**
     * update password when user logged
     * @param userInfo
     */
    async updatePasswordLogged(userInfo: {}): Promise<any> {
        return http.post(this.updatedPassword, userInfo);
    }

    /**
     * logout
     */
    async logOut(): Promise<any> {
        return http.post(this.logOutURL);
    }
}

export const userApi = new UserApi();