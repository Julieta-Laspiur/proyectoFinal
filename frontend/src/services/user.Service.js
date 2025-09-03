import { getJson } from '../Libs/api.js';

export async function get (query) {
    return await getJson('/user', query);
}