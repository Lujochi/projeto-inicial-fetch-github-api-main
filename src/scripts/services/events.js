import { baseURL, repositoriesQuantity } from "../variables.js";

async function getEvents(userName) {
  const response = await fetch(
    `${baseURL}/${userName}/events?per_page=${repositoriesQuantity}`
  );
  return await response.json();
}

export { getEvents };
