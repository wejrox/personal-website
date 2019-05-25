import { action, computed, observable } from "mobx";

export enum PossiblePages {LANDING, PROJECTS, CONTACT}

/**
 * Mob-X store of variables and functions pertaining to state within the application.
 * All global state modification is handled within this class.
 */
export class WebsiteStore {
    @observable public currentPage: PossiblePages = PossiblePages.LANDING;

    /**
     * Gets the name of the page that the user is on based on the option currently selected.
     */
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

    /**
     * Changes the current page that the user is on.
     *
     * @param {PossiblePages} newPage  Page that the user wishes to be on.
     */
    @action
    public changePage(newPage: PossiblePages) {
        this.currentPage = newPage;
    }
}

export const websiteStore = new WebsiteStore();
