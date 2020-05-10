import { Table } from "./Table";
import { UsersRepositories, Column, RepositoryTagData } from "./../types";
import { isValidDate } from "../utils";
import { addError } from "../services/errorService";

export const getReposElements = () => document.getElementsByTagName("repos");

export const getReposTagsData = (repos: HTMLCollection): RepositoryTagData[] => {
  const repositoriesData: RepositoryTagData[] = [];
  for (let i = 0; i < repos.length; i++) {
    const repository = repos[i];
    const username = repository.getAttribute("data-user");
    const updated = repository.getAttribute("data-update");

    if (username && updated) {
      const date = new Date(updated);
      if (isValidDate(date)) {
        repositoriesData.push({ username, updated: date });
      } else {
        addError(`Date "${updated}" is not valid date.`);
      }
    } else {
      addError(`data-user: "${username}" or data-update: "${updated}" value is empty`);
    }
  }
  return repositoriesData;
};

export const addRepositoriesToPage = (usersRepositories: UsersRepositories[]) => {
  const container = document.getElementById("repositories-app")!;
  const repositoriesHtml = getHtmlRepositories(usersRepositories);
  if (repositoriesHtml.length > 0) {
    container.innerHTML = repositoriesHtml;
  } else {
    addError("Unable to find any repositories for provided data.");
  }
};

const getHtmlRepositories = (usersRepositories): string =>
  usersRepositories
    .map(
      (user: UsersRepositories) =>
        `<div class="repository">
              <p class="repository__owner">Repositories for user ${user.username}</p>
              ${Table(columns, user.repositories)}
         </div>`
    )
    .join("");

const columns: Column[] = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "description",
    label: "Description",
  },
  {
    name: "updated_at",
    label: "Updated at",
    customRender: (date) => new Date(date).toLocaleDateString(),
  },
  {
    name: "html_url",
    label: "Download link",
    customRender: (url) => `<a href="${url}" target="_blank" class="repository__url">GitHub</a>`,
  },
];
