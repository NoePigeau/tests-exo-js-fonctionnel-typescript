const containsDuplicate = (nums: Array<number>, list: Array<number> = []): boolean => {

    if(nums.length == 0) {
        return false
    }
    const [ num, ...remainingNums] = nums
    if(list.includes(num)) {
        return true
    }
    return containsDuplicate(remainingNums, [ ...list, num])
}
// console.log(containsDuplicate([1, 2, 3, 4]))

const validAnagram = (s: string, t: string) => {
    if(s.length != t.length) {
        return false
    }
    const sortedS = s.split('').sort();
    const sortedT = t.split('').sort();
    for(const i in sortedS) {
        if(sortedS[i] != sortedT[i]) {
            return false
        }
    }
    return true
}

// console.log(validAnagram("anagramt", "nagaramo"))

const twoSumBF = (nums: Array<number>, target: number): Boolean|Array<any> => {

    for(const i in nums) {
        for(let j = parseInt(i); j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    return false
}

const twoSum = (nums: Array<number>, target: number): Boolean|Array<any> => {
    let list = new Map<number, number>();
    for(const [key, val] of nums.entries()) {
        console.log(val)
        if(list.has(target - val)) {
            return [ [...list.entries()].filter(([id,el]) => id == target - val)[0][0], key]
        }
        list.set(val, key);
        console.log(list)
    }
    return false
}

console.log(twoSum([2,7,11,15], 9));