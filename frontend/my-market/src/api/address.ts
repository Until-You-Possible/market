import { http } from "../util/http";


class AddressApi {

    // address list url
    private addressListURL       : string = "/shipping/list.do";
    // add new user for receive the goods
    private addNewUserAddressURL : string = "/shipping/add.do";
    // updated the receiver
    private updatedReceiverURL   : string = "/shipping/update.do";
    // delete the receiver
    private deleteReceiverURL    : string = "/shipping/del.do";
    // get single user info
    private getSingleAddressURL  : string = "/shipping/select.do";


    async fetchAddressList(): Promise<any> {
        return http.get(this.addressListURL);
    }



}


export const addressApi = new AddressApi();