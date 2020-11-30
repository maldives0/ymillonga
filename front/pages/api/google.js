import { backUrl } from '../config/config';
export default function handler(req, res) {

    res.status(200).redirect(`${backUrl}/user/google`);
}