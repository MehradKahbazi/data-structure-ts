/**
 * Hash Table structure implemented with chaining strategy
 */

class HashTable {
    private size = 16;
    private buckets: Array<null | any> = Array(16).fill(null).map(() => []);
    constructor() { }


    hash(key: string) {
        let hash = 0;

        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key: string, value: number) {
        const keyHash = this.hash(key)
        const bucketArray: any[] = this.buckets[keyHash];
        const storedElement = bucketArray.find((el) => el.key === key);

        if(storedElement){
            storedElement.value = value
        }else{
            bucketArray.push({key, value})
        }
    }

    get(key: string) {
        const keyHash = this.hash(key);
        const bucketArray: any[] = this.buckets[keyHash];
        const storedElement = bucketArray.find(el => el.key === key);
        return storedElement;
    }

    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}

const tbl1 = new HashTable();

for(const char of 'academind'){
    tbl1.set(char,1);
}

for(const char of 'hello'){
    tbl1.set(char,1);
}

for(const char of 'does this work'){
    tbl1.set(char,1);
}

console.log(tbl1.showInfo());
