// find two same number et return one of them
export const findTwins = (values: Array<any>, list: Array<any> =[]): Array<any> | null => {
    if(values.length === 0) {
        return null;
    }
    const [value, ...remainingValues] = values

    if(list.includes(value)) {
        return value
    }   
    return findTwins(remainingValues, [...list, value])
}

export const findTwinsBis = (values: Array<any>) => values.find(v => values.indexOf(v) !== values.lastIndexOf(v)) || null
