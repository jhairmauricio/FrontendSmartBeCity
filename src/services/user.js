import axios from 'axios'
import vars from '../vars'

const uri =  vars.LOCAL == true ? `http://localhost:${vars.BACKPORT}/api/user` : `http://${vars.REMOTEIP}:${vars.BACKPORT}/api/user`

const Cuser = async(body) => {

    /* 
    body example

    {        
        "name": "diego axsel garcia sierra",
        "age": 23,
        "email": "diego@gmail.com",
        "passwd": "1234567"
    }
    */

    body = {
        "name": "diego axsel garcia sierra",
        "age": 23,
        "email": "vhm@gmail.com",
        "passwd": "1234567"
    }

    return axios.post(`${uri}/Cuser`, body)
}

export default Cuser;