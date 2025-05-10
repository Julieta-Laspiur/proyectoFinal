import {loginService} from '../Services/login.js';

export function login (app){
    app.post(
        '/login',
        async (req, res) => {
            const result = await loginService(req.body);
            res.json(result);
    });
}