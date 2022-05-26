//关于use的接口 (测试版本)

import { http } from "../util/http";

export type User = {
    name : string,
    age  : number,
    sex  : boolean,
    job  : string
}

class UserApi {

    async fetchUsers(): Promise<any> {
        return await http.get<User[]>("http://localhost:3000/mockData/user.json");
    }

}

export const userApi = new UserApi();