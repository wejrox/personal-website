import { PossiblePages, WebsiteStore } from "../../main/stores/WebsiteStore";

describe("WebsiteStore class", () => {
    const store: WebsiteStore = new WebsiteStore();

    it("gets the name of the page correctly", () => {
        store.changePage(PossiblePages.LANDING);
        expect(store.pageName).toBe("");
        store.changePage(PossiblePages.CONTACT);
        expect(store.pageName).toBe("Contact");
        store.changePage(PossiblePages.PROJECTS);
        expect(store.pageName).toBe("Projects");
        store.changePage(-1);
        expect(store.pageName).toBe("Unknown");
    });

    it("updates the current page", () => {

        // Make sure the test is actually changing the page.
        if (store.currentPage === PossiblePages.PROJECTS) {
            store.changePage(PossiblePages.LANDING);
            expect(store.currentPage).toBe(PossiblePages.LANDING);
        } else {
            store.changePage(PossiblePages.PROJECTS);
            expect(store.currentPage).toBe(PossiblePages.PROJECTS);
        }
    });
});
