import axios from "axios"
import { showMessage } from "../utils";
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: 'iconcuowu',
            duration: 1500
        });
        return null
    }
    return resp.data.data
})
export default ins