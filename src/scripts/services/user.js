import { baseUrl } from "../variables.js";

async function user(userName) {
    const url = `${baseUrl}/${userName}`
    const response = await fetch(url);
    return await response.json();
};
export { user };