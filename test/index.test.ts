import { arrayDiff } from "../src/exo-fonctionnel/array-diff";
import { findTwins, findTwinsBis } from "../src/exo-fonctionnel/find-twins"
import { smaller } from "../src/exo-fonctionnel/smaller"

describe("Test array diff:", () => {

    //test 1
    it("should return [ 'd', 'e', 'j', 'z' ] for test 1", () => {       
        expect(arrayDiff(["a", "b" , "z", "d", "e", "d"], ["a", "b", "j", "j"])).toEqual([ 'd', 'e', 'j', 'z' ]);
    });

    //test 2
    it("should return ['b', 'd', 'e','g', 'j', 'k','z'] for test 2", () => {
        const tab1 = ["c", "g" , "z", "d", "e", "d", "k"]
        const tab2 = ["c", "b", "j", "j"]
        expect(arrayDiff(tab1, tab2)).toEqual(['b', 'd', 'e','g', 'j', 'k','z']);
    });  

})

describe("Test finds twins:", () => {

    //test 1
    it("should return 8 for test 1", () => {
        expect(findTwins([ 8, 3, 6, 34, 7, 8, 2])).toBe(8);
    }); 

    //test 2
    it("should return 8 for test 2", () => {
        expect(findTwinsBis([ 8, 3, 6, 34, 7, 8, 2])).toBe(8);
    }); 
    
})

describe("Test smaller:", () => {

    //test 1
    it("should return 8 for test 1", () => {
        expect(smaller([ 8, 3, 6, 34, 7, 8, 2], 3)).toBe(3);
    }); 

    //test 2
    it("should return 8 for test 2", () => {
        expect(smaller([ 8, 3, 6, 34, 7, 8, 2], 2)).toBe(1);
    }); 
    
})