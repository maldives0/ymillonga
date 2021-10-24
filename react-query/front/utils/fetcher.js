import axios from 'axios';
const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
//be로 axios를 통해 get을 한 뒤 결과값을 result.data로 받는다
export default fetcher;