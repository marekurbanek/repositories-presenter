import { UsersRepositories, RepositoryResponse } from "./../types";
import { RepositoryTagData } from "../types";
import { addFailedResponsesToErrorIfExists, addError } from "./errorService";

const baseUrl = "https://api.github.com/users";

export const getRepositories = async (reposTagsData: RepositoryTagData[]) => {
  const requestList: Promise<Response>[] = reposTagsData.map((repo) =>
    fetch(`${baseUrl}/${repo.username}/repos?sort=updated&direction=desc`)
  );
  const responses = await Promise.all(requestList);
  addFailedResponsesToErrorIfExists(responses);
  const responsesJsons = await Promise.all(responses.filter((res) => res.ok).map((response) => response.json()));

  return reposResponseToUserRepositories(responsesJsons, reposTagsData);
};

const reposResponseToUserRepositories = (usersResponses, reposTagsData): UsersRepositories[] => {
  if (usersResponses && usersResponses.length > 0) {
    return usersResponses
      .map((userResponse: RepositoryResponse[]) => {
        const { login } = userResponse[0].owner;
        const updatedDate = getUpdateDateForUser(login, reposTagsData);
        const filteredRepositories = filterByUpdatedDate(userResponse, updatedDate);
        return { username: login, repositories: filteredRepositories };
      })
      .filter(hasAtLeastOneRepository);
  } else {
    return [];
  }
};

const hasAtLeastOneRepository = (user: UsersRepositories) => {
  if (user.repositories.length > 0) {
    return true;
  } else {
    addError(`User ${user.username} for provided "data-update" has no repositories`);
    return false;
  }
};

const getUpdateDateForUser = (login, reposTagsData: RepositoryTagData[]): Date => {
  const updated = reposTagsData.find((repo) => repo.username.toUpperCase() === login.toUpperCase())!.updated;
  return new Date(updated);
};

const filterByUpdatedDate = (repositories, updatedDate) =>
  repositories.filter((repository) => new Date(repository.updated_at) > updatedDate);
