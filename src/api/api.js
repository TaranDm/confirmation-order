

import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_HTTP;
export default {


  async  fetchTrackingInfo(key, func, uid, status) {
    await axios
      .get(
        `index.php`, {
          params: {
            key,
            func,
            uid,
            status
          },
        }
      )
      .then((response) => response);
  }
}

