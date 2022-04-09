const sousSeqSomNulle = (list: Array<any>, ind: number, array: Array<number>) => { 
    
    if(list.length > 0) {
        let sum = 0 
        let update = false
        
        list.forEach((val) => {
            if(val[1] == 1) {
                update = true
                sum += val[0]
            }
        })
        
        if(sum === 0 && update){
            console.log(list.filter(val => val[1] == 1).map(val => val[0] > 0 ? val[0] : `(${val[0]})`).join(" + "))
        }  
    }   
     
    if(array.length > ind) {
        list[ind] = [array[ind], 0]
        sousSeqSomNulle(list, ind+1, array)
        list[ind] = [array[ind], 1]
        sousSeqSomNulle(list, ind+1, array)

    }
}

const getResult = (array: Array<number>) => sousSeqSomNulle([], 0, array);


getResult([4 , 6, 5, -3, 1, 9, -12, 40])