import axios from "axios"

const instance = axios.create({
  // API
  baseURL: '...' /* THE API (CLOUD fucnton) */
});

export default instance;