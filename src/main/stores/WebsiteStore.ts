import { action, computed, observable } from "mobx";

export enum PossiblePages {LANDING, PROJECTS, CONTACT}

class WebsiteStore {
    @observable currentPage: PossiblePages = PossiblePages.LANDING;

    @computed
    public get pageName() {
        switch (this.currentPage) {
            case PossiblePages.PROJECTS:
                return "Projects";
            case PossiblePages.CONTACT:
                return "Contact";
            case PossiblePages.LANDING:
                return "";
            default:
                return "Unknown";
        }
    }

    @action
    public changePage(newPage: PossiblePages) {
        this.currentPage = newPage;
    }
}

export const websiteStore = new WebsiteStore();