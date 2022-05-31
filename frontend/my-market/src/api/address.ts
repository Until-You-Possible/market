import { http } from "../util/http";


class AddressApi {

    // address list url
    private addressListURL    : string = "/shipping/list.do";
    // add new user for receive the goods
    private addNewUserAddress : string = "/shipping/add.do";
    // updated the receiver
    private updatedReceiver   : string = "/shipping/update.do";
    // delete the receiver
    private deleteReceiver    : string = "/shipping/del.do";
    // get single user info
    private getSingleAddress  : string = "/shipping/select.do";


    async fetchAddressList(): Promise<any> {
        return http.get(this.addressListURL);
    }



}


export const addressApi = new AddressApi();