import Axios from "axios";
import Config from "./config";
export default class Login {
  static async getQR(uuid) {
    const res = await Axios.get(`${Config.base_url_login}qrCode`, {
      params: { uuid: uuid },
    });
    return res;
  }
  static async checkIfScan(uuid) {
    const res = await Axios.get(`${Config.base_url_login}getInfo`, {
      params: { uuid: uuid },
    });
    return res;
  }
}
