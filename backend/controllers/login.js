import {LoginService} from '../Services/login.js';

export function login (app){
    app.post(
        '/login',
        async (req, res) =>  res.send(await LoginService.login(req.body))
    );
}