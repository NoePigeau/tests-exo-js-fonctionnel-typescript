/**
 * Transform a value by applying a set of functions to it
 * @param {Array<Function>} callbacks An array of functions to apply
 * @param {any} input A value to transform
 * @return {any} The result of the application of all callbacks
 * @example
 * const add = x => y => x + y;
 * const multiply = x => y => x * y;
 * compose([add(100), multiply(1.5), add(50)], 1); // 201.5
 */

export const compose = (callbacks: Array<Function>, input: any): any => {
    if(callbacks.length == 0 || callbacks === null) {
        return input
    }

    const [callback, ...remainingsCallbacks] = callbacks

    return compose( remainingsCallbacks, callback(input))
}