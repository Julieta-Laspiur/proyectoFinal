export function hola(app){
 app.get(
    '/hola', 
    (req, res)=>{
    res.send('hola, mundo!');
  }
 );
 app.post(
    '/chau', 
    (req, res)=>{
    res.send('chau mundo!');
  }
 );
}