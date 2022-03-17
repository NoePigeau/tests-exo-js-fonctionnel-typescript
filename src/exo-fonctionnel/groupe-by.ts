export const toString = (data: Object) => {
    return JSON.stringify(data, null, 2);
};
  
export const groupBy = (property: string, object: Array<Object> ) => {
return object.reduce((groups: any, item: any) => {
    if (groups[item[property]] === undefined) {
    return {
        ...groups,
        [item[property]]: [
        item
        ]
    };
    }

    return {
    ...groups,
    [item[property]]: [
        ...groups[item[property]],
        item
    ]
    };
}, {});
};

