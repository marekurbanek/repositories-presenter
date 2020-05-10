import { RepositoryTagData, UsersRepositories } from "./types";
import { getRepositories } from "./services/repositoryService";
import { addRepositoriesToPage, getReposElements, getReposTagsData } from "./components/Repository";
import { showErrorsIfExists } from "./services/errorService";
import "./styles/style.scss";

const main = async () => {
  const repos: HTMLCollection = getReposElements();
  const reposTagsData: RepositoryTagData[] = getReposTagsData(repos);
  const usersRepositories: UsersRepositories[] = await getRepositories(reposTagsData);
  addRepositoriesToPage(usersRepositories);
  showErrorsIfExists();
};

main();
