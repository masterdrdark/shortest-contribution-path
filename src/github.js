const mockRepos = {
	owner1: {
		repo1: [{ user_id: 1, name: "user1" }, { user_id: 2, name: "user2" }]
	},
	owner2: {
		repo2: [{ user_id: 2, name: "user2" }, { user_id: 3, name: "user3" }]
	},
	owner3: {
		repo3: [{ user_id: 3, name: "user3" }, { user_id: 4, name: "user4" }]
	}
};

const mockUsers = {
	user1: [{ repo_id: 1, owner: "owner1", repo: "repo1" }],
	user2: [
		{ repo_id: 1, owner: "owner1", repo: "repo1" },
		{ repo_id: 2, owner: "owner2", repo: "repo2" }
	],
	user3: [
		{ repo_id: 2, owner: "owner2", repo: "repo2" },
		{ repo_id: 3, owner: "owner3", repo: "repo3" }
	],
	user4: [{ repo_id: 3, owner: "owner3", repo: "repo3" }]
};

let repos = {
	getForUser: userName => {
		return mockUsers[userName];
	},

	getContributors: opts => {
		return mockRepos[opts.owner][opts.repo];
	}
};

export { repos };
