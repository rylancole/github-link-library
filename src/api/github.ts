import axios from "axios";

import GITHUB_SETTINGS from "./secrets.json";
const GITHUB_BASE_URL = "https://api.github.com";

// configure default http request settings and headers
axios.defaults.baseURL = GITHUB_BASE_URL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${GITHUB_SETTINGS.GITHUB_AUTH}`;
axios.defaults.headers.common["Accept"] =
  "application/vnd.github.inertia-preview+json";

// get the project data as returned from api given the project name
export async function getPRs() {
  const query = `query { viewer { login }}`;
  axios.post("/graphql", { query }).then((res) => {
    console.log(res);
  });

  return "getPRs() completed.";
}
