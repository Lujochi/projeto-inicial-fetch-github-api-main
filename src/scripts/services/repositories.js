import { baseURL, repositoriesQuantity } from "/src/scripts/variables.js";

async function getRepositories(userName) {
  const response = await fetch(
    `${baseURL}/${userName}/repos?per_page=${repositoriesQuantity}`
  );
  return await response.json();
}

export { getRepositories };
