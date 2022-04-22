const mySqrt = (x: number, begin: number = 0, end: number = x): number|any => {
    
    if(begin > end) {
        return -1
    }
    const mid = Math.floor((begin + end) / 2)
    if(x == mid*mid) {
        return mid
    }
    if( mid*mid < x) {
        return mySqrt(x, begin + 1, end);
    }
    if(mid*mid > x) {
        return mySqrt(x, begin, end - 1);
    }

}

console.log(mySqrt(8));