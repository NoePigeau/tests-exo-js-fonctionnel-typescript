import { searchTab } from "../src/exo-fonctionnel/recherche-dichotomique"


describe("Test search diff:", () => {

    //test 1
    it("should return [ 'd', 'e', 'j', 'z' ] for test 1", () => {       
        expect(searchTab(2, [1, 2, 5, 56, 123]));
    });

})