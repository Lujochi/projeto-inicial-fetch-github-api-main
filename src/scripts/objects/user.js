const user = {
  avatarURL: "",
  name: "",
  bio: "",
  userName: "",
  repositories: [],
  setInfo(gitHubUser) {
    this.avatarURL = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.userName = gitHubUser.login;
  },
  setRepositories(repositories) {
    this.repositories = repositories;
  },
};

export { user };
