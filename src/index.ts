import { arrayDiff } from "./exo-fonctionnel/array-diff";
import { findTwins, findTwinsBis } from "./exo-fonctionnel/find-twins";


const vals: Array<number> = [ 8, 3, 6, 34, 7, 8, 2]
console.log(findTwins(vals))
console.log(findTwinsBis(vals))

const tab1: Array<any> = ["c", "g" , "z", "d", "e", "d", "k"]
const tab2: Array<any> = ["c", "b", "j", "j"]


console.log(arrayDiff(tab1, tab2))