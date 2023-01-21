import axios from 'axios'
import vars from '../vars'

const uri =  vars.LOCAL == true ? `http://localhost:${vars.BACKPORT}/api/login` : `http://${vars.REMOTEIP}:${vars.BACKPORT}/api/login`

const Oauth = async(body) => {

    /* 
    body example

    body = {
        "email"  : "diego@gmail.com",
        "passwd" : "1234567"
    }
    */

    body = {
        "email"  : "diego@gmail.com",
        "passwd" : "1234567"
    }

    return axios.post(`${uri}/oauth`, body)
}

export default Oauth;



