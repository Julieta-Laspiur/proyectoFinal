import { postJson } from '../Libs/api.js';

export async function  login (username, password) {
    return await postJson('/login', {username, password});
}