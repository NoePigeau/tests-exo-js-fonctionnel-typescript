import { factorielle, quotient, reste, pgcd } from '../src/exo-fonctionnel/exo-recursive';


describe("Exo quotient test:", () => {

    //test 1
    it("should return 6 for quotient(20, 3)", () => {       
        expect(quotient(20, 3)).toBe(6);
    });

})

describe("Exo reste test:", () => {

    //test 1
    it("should return 2 for reste(20, 3)", () => {       
        expect(reste(20, 3)).toBe(2);
    });

})

describe("Exo factorielle test:", () => {

    //test 1
    it("should return 120 for factorielle(5)", () => {       
        expect(factorielle(5)).toBe(120);
    });

})

describe("Exo pgcd test:", () => {

    //test 1
    it("should return 1 for pgcd(7,4)", () => {       
        expect(pgcd(7, 4)).toBe(1);
    });
    //test 2
    it("should return 2 for pgcd(10,8)", () => {       
        expect(pgcd(10, 8)).toBe(2);
    });

    it("should return 16 for pgcd(528, 512)", () => {       
        expect(pgcd(528, 512)).toBe(16);
    });

})