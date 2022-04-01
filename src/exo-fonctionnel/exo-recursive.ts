// algorithme factorielle en recursive

export const factorielle = (number: number): number => {
    if(number <= 1 ) {
        return number
    }
    return number * factorielle(number - 1)
}


// algorithme recursive

export const quotient = (n: number, d: number, count: number = 0): number => {

    if(n - d < 0) {
        return count;
    }
  
    return quotient(n - d, d, count + 1) 
}

export const reste = (n: number, d: number): number => {

    if(n - d < 0) {
        return n;
    }
    
    return reste(n - d, d);
}

export const pgcd = (a: number, b: number): number => {
    if(reste(a,b) == 0) {
        return b;
    }
    return pgcd(b, reste(a,b));
}

const result = quotient(20, 3);


