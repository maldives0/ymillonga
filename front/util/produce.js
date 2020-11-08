// IE11 지원하기 위해
import { enableES5, produce } from 'immer';
export default (...args) => {
    enableES5();//ES5를 모든 기능 위에서 실행되도록 함
    return produce(...args);
};