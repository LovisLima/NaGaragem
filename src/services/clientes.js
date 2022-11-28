import { http } from './config'

export default{
     cadastrar: (cliente) => {
        return http.post('cliente', cliente)
     }
}