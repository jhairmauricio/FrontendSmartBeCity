import axios from 'axios'
import vars from '../vars'

const uri =  vars.LOCAL == true ? `http://localhost:${vars.BACKPORT}/api/user` : `http://${vars.REMOTEIP}:${vars.BACKPORT}/api/user`

const Cuser = async(body) => axios.post(`${uri}/Cuser`, body)


export default Cuser;
export {}