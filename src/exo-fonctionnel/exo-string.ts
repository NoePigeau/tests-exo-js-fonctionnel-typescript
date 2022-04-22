

const constantsRoman = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
};

const keyRoman = (val: string) => val as keyof typeof constantsRoman

const romanToInteger = ( value: String): number => {
    let sum = 0

        value.split('').forEach((num, i) => {
            if(constantsRoman[keyRoman(num)] < constantsRoman[keyRoman(value[i + 1])]) {
                console.log(i, constantsRoman[keyRoman(num)], constantsRoman[keyRoman(value[i + 1])])
                sum -= constantsRoman[keyRoman(num)] 
            }      
            else sum += constantsRoman[keyRoman(num)]
            console.log(sum)
        })
   
    return sum
}

// console.log(romanToInteger("MCMXCIV"))

const ransomNote = (ransomNote: String, magazine: String): boolean => {
    let mag = [...magazine]
    for(const [i, letter] of [...ransomNote].entries()) {
        if(mag.includes(letter)) {
            mag.splice(mag.indexOf(letter), 1 );
        }else {
            return false
        }
    }
    
    return true
}

// console.log(ransomNote("abcda", "abcdeeeea"))

const validParentheses = (s: String): boolean => {
    const type: Record<string, string> = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    let stack: Array<string> = [];
    for(const val of s) {
        if(type[val]) {
            stack.push(type[val])
            console.log(stack)
        }else if(stack.length > 0 && stack[stack.length - 1] === val) {
            stack.pop();
        }else {
            return false
        }      
    }

    return stack.length == 0
}
// console.log("vp:" + validParentheses("[]{}()[]"))
// console.log("vp:" + validParentheses("([])[][]((())){{}}[]"))
// console.log("vp:" + validParentheses("]"))

const lengthOfLongestSubstring = (s: string): number => {

    let maxLength = 0;
    let current = 0;
    let subString: Set<string> = new Set();
    [...s].forEach((val, key) => {
        while(subString.has(s[key])) {
            subString.delete(s[current])
            current++;
        }
        subString.add(s[key]);
        maxLength = Math.max(maxLength, key - current + 1)
        console.log(s.slice(current, key + 1))
    })
    return maxLength 
};


console.log(lengthOfLongestSubstring("dvdf"))