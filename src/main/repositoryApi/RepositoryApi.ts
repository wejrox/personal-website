import { action, observable } from "mobx";
import axios, { AxiosRequestConfig } from "axios";
import { IRepositories } from "./RepositoryTypes";

class RepositoryApi {
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
}

export default new RepositoryApi();
