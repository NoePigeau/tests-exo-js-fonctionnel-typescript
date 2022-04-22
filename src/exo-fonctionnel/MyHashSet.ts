class MyHashSet {

    hashSet: number[] = []
    constructor() {

    }


    add(key: number): void {
        if(!this.contains(key)) {
            this.hashSet.push(key)
        }
    }

    remove(key: number): void {
        const index = this.hashSet.indexOf(key)
        if(index != -1) {
            this.hashSet.splice(index, 1);
        }
    }

    contains(key: number): boolean {
        return this.hashSet.includes(key)
    }
}