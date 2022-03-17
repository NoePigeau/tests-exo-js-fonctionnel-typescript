import { groupBy, toString } from '../src/exo-fonctionnel/groupe-by';

const users = [
    { id: 1, username: "amin", language: "javascript", role: "ADMIN" },
    { id: 2, username: "yves", language: "php", role: "ADMIN" },
    { id: 3, username: "frederic", language: "java", role: "ADMIN" },
    { id: 4, username: "lucas", language: "javascript", role: "USER" },
    { id: 5, username: "quentin", language: "php", role: "USER" },
    { id: 6, username: "sebastien", language: "elm", role: "USER" }
  ];


const usersByLanguage = groupBy("language", users);
const usersByRole = groupBy("role", users);
const searchedRole = "ADMIN";

describe("Test groupBy:", () => {

    //test 1
    it("should return by language for test 1", () => {       
        expect(groupBy("language", users)).toEqual({"elm": [{"id": 6, "language": "elm", "role": "USER", "username": "sebastien"}], "java": [{"id": 3, "language": "java", "role": "ADMIN", "username": "frederic"}], "javascript": [{"id": 1, "language": "javascript", "role": "ADMIN", "username": "amin"}, {"id": 4, "language": "javascript", "role": "USER", "username": "lucas"}], "php": [{"id": 2, "language": "php", "role": "ADMIN", "username": "yves"}, {"id": 5, "language": "php", "role": "USER", "username": "quentin"}]});
    });

    //test 2
    it("should return by role for test 2", () => {       
        expect(groupBy("role", users)).toEqual({"ADMIN": [{"id": 1, "language": "javascript", "role": "ADMIN", "username": "amin"}, {"id": 2, "language": "php", "role": "ADMIN", "username": "yves"}, {"id": 3, "language": "java", "role": "ADMIN", "username": "frederic"}], "USER": [{"id": 4, "language": "javascript", "role": "USER", "username": "lucas"}, {"id": 5, "language": "php", "role": "USER", "username": "quentin"}, {"id": 6, "language": "elm", "role": "USER", "username": "sebastien"}]});
    }); 

})
