export const searchTab = (element: any, list: Array<any>): number => {
    if(list.length == 1) {
        return 0
    }
    let mid: number = list.length / 2

    if( list[mid] == element) {
        return element
    }
    else if(list[mid] > element) {
        return searchTab(element, list.slice(0, mid)) 
    }
    else {
        return searchTab(element, list.slice(mid))
    }
}
