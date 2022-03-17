import { compose } from '../src/exo-fonctionnel/compose';


describe("Test compose:", () => {

    //test 1
    it("should return [ 'd', 'e', 'j', 'z' ] for test 1", () => {   
        const add = (x: number)  => (y: number)  => x + y;
        const multiply = (x:number) => (y: number) => x * y;
        compose([add(100), multiply(1.5), add(50)], 1); // 201.5    
        expect(compose([add(100), multiply(1.5), add(50)], 1)).toEqual(201.5);
    });

    

})