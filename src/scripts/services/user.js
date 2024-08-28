import { baseURL } from "/src/scripts/variables.js";

async function getUser(userName) {
  const response = await fetch(`${baseURL}/${userName}`);
  return await response.json();
}

export { getUser };
