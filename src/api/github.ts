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
  const query = `
    query {
      viewer {
        pullRequests(last: 10, states: OPEN) {
          nodes {
            title
            number
            url 
            reviews(last: 10, states:APPROVED) {
              totalCount
            }
          }
        }
      }
      themis: repository(owner: "clio", name:"themis") { 
        issues(first: 100, orderBy: { field:CREATED_AT, direction:ASC }, states: OPEN, filterBy: { assignee: "rylancole" }){
          nodes {
            title
            number
            url
          }
        }
      }
      grow: repository(owner: "clio", name:"grow") { 
        issues(first: 100, orderBy: { field:CREATED_AT, direction:ASC }, states: OPEN, filterBy: { assignee: "rylancole" }){
          nodes {
            title
            number
            url
          }
        }
      }
    }
  `;
  return axios.post("/graphql", { query }).then((res) => {
    if (res && res.data) {
      if (res.data.errors) {
        return {
          status: "error",
          errors: res.data.errors,
        };
      } else if (res.data.data) {
        return {
          status: "ok",
          data: res.data.data,
        };
      }
    }
    return {
      status: "error",
      errors: [{ message: "Error in getPRs()" }],
    };
  });
}
