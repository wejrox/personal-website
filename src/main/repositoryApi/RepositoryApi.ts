import { action, observable } from "mobx";
import axios, { AxiosRequestConfig } from "axios";
import { IRepositories } from "./RepositoryTypes";

class RepositoryApi {
    public readonly rawGithubBase: string = "https://raw.githubusercontent.com/wejrox";

    @observable
    public currentRepositories: IRepositories = [];
    private readonly endpointBase: string = "https://api.github.com/users/wejrox/repos";
    private readonly headers: AxiosRequestConfig = {
        headers: {
            accept: "application/vnd.github.v3+json",
        },
    };

    /**
     * Update the list of repositories to match those contained within GitHub.
     * Runs async as it makes a server request.
     */
    @action
    public async updateRepositories() {
        this.currentRepositories = await axios.get(this.endpointBase, this.headers)
            .then((promise) => promise.data)
            .catch((reason) => {
                throw new Error(reason);
            });
    }

    /**
     * Gets the contents of the rundown document from GitHub's raw repository.
     * Each repository should contain a project rundown as it provides information about the reason behind the projects
     * inception.
     *
     * @param {string} projectName  Name of the project as it appears in the GitHub URL.
     * @return {Promise<string>}  Contents of the rundown document.
     */
    @action
    public async getProjectRundown(projectName: string): Promise<string> {
        const rawUrl = `${this.rawGithubBase}/${projectName}/master/project-details/project-rundown.md`;
        return await axios.get(rawUrl)
            .then((promise) => promise.data ? promise.data : null)
            .catch(() => null);
    }
}

export default new RepositoryApi();
