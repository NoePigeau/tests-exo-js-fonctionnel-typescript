export const searchTab = (element: any, list: Array<any>): number|boolean => {
    if(list.length == 0) {
        return false
    }
    let mid: number = Math.floor(list.length / 2);

    if( list[mid] === element) {
        return element
    }
    else if(list[mid] > element) {
        return searchTab(element, list.slice(0, mid)) 
    }
    else {
        return searchTab(element, list.slice(mid))
    }
}


export const searchTabIndex = (element: any, list: Array<any>, start: number = 0, end: number = list.length -1): number|boolean => {
    if(start > end) {
        return -1;
    }
    let mid: any = Math.floor((start + end) / 2);
    if( list[mid] === element) {
        return mid;
    }
    else if(list[mid] > element) {
        end = mid - 1
        return searchTabIndex(element, list, start, end); 
    }
    else {
        start = mid + 1
        return searchTabIndex(element, list, start, end)
    }
}

const result = searchTabIndex(2, [1, 2, 5, 56, 123]);
