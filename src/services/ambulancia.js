import axios from 'axios'
import vars from '../vars'

const uri =  vars.LOCAL == true ? `http://localhost:${vars.BACKPORT}/api/ambulancia` : `http://${vars.REMOTEIP}:${vars.BACKPORT}/api/ambulancia`

const Cambulancia     = async(body,     header) => axios.post  (`${uri}/Cambulancia`,              body, { headers :  {'Authorization': header}})
const RambulanciabyId = async(      id, header) => axios.get   (`${uri}/RambulanciabyId?id=${id}`,       { headers :  {'Authorization': header}})
const UambulanciabyId = async(body, id, header) => axios.patch (`${uri}/UambulanciabyId?id=${id}`, body, { headers :  {'Authorization': header}})
const Dambulancia     = async(      id, header) => axios.delete(`${uri}/Dambulancia?id=${id}`          , { headers :  {'Authorization': header}})

export default Cambulancia;
export {RambulanciabyId, UambulanciabyId, Dambulancia};