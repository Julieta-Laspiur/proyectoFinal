export async function loginService(credentials){
if(!credentials || !credentials.username || !credentials.password || typeof credentials.username != 'string' || typeof credentials.password != 'string'){ 
    return{
        error:'Argumentos no válidos'
    } 
    //throw new InvalidArgumentException();

}
    if(credentials.username != 'admin'){
        return{
            error: 'credenciales no valida',
            
        };
    }

    if(credentials.password != '1234'){
        return{
            error: 'Credencial inválida'
        };
    }
 return {
    Token:'Token de acceso'
 };
}