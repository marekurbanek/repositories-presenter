export type RepositoryTagData = {
  username: string;
  updated: Date;
};

export type UsersRepositories = {
  username: string;
  repositories: Repository[];
};

export type Repository = {
  name: string;
  description: string;
  html_url: string;
  updated_at: Date;
};

export type RepositoryResponse = {
  name: string;
  owner: {
    login: string;
  };
  description: string;
  html_url: string;
  updated_at: string;
};

export type Column = {
  name: string;
  label: string;
  customRender?: Function;
};
