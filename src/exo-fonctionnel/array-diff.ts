// function that return an array sorted of diff values between two arrays with no duplicate keys
const myFilter = (tab1: Array<any>, tab2: Array<any>) => tab1.filter(v => !tab2.includes(v))
export const arrayDiff = (tab1: Array<any>, tab2: Array<any>) => [...new Set([...myFilter(tab1, tab2), ...myFilter(tab2, tab1)])].sort()