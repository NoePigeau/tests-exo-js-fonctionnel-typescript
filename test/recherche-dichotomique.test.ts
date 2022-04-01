import { searchTab, searchTabIndex } from "../src/exo-fonctionnel/recherche-dichotomique"


describe("Test search diff:", () => {

    //test 1
    it("should return [1, 2, 5, 56, 123] for test 1", () => {       
        expect(searchTabIndex(2, [1, 2, 5, 56, 123])).toBe(1);
    });

    it("should return [1, 2, 5, 56, 123] for test 1", () => {       
        expect(searchTab(2, [1, 2, 5, 56, 123])).toBe(2);
    });

})