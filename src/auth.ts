import axios, { AxiosResponse } from "axios";

// Azure DevOps organization URL and project name
const organization = "ni";
const project = "DevCentral";

// Personal Access Token (PAT) with necessary permissions
const pat = ""; // add the PAT value 

// Pull Request ID
const pullRequestId = 557244; 
const repositoryId = "Skyline";
const apiUrl = `https://dev.azure.com/${organization}/${project}/_apis/git/repositories/${repositoryId}/pullRequests/${pullRequestId}/threads?api-version=7.1-preview.1`;

const axiosConfig = {
  headers: {
    Authorization: `Basic ${Buffer.from(`:${pat}`).toString("base64")}`,
  },
};

axios
  .get(apiUrl, axiosConfig)
  .then((response: AxiosResponse) => {
    console.log("Pull Request Details:", response.data.value[328]);
  })
  .catch((error) => {
    console.error("Error fetching pull request details:", error.message);
  });
