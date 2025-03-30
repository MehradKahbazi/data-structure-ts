/**
 * Hash Table structure implemented with open addressing strategy
 */

class OAHashTable{
    private size = 100;
    private buckets: Array<null | any> = Array(100).fill(null);
    constructor() {}

    hash(key: string) {
        let hash = 0;

        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key: string, value: number){
        let keyHash = this.hash(key);
        if(this.buckets[keyHash] === null || this.buckets[keyHash].key === key){
            this.buckets[keyHash] = {key, value}
        } else{
            while(this.buckets[keyHash] !== null){
                keyHash++
            }
            this.buckets[keyHash] = {key, value};
        }
    }

    get(key: string){
        const keyHash = this.hash(key);
        for(let i = keyHash; i < this.buckets.length; i++){
            if(!this.buckets[i]){
                continue;
            }
            if(this.buckets[i].key === key){
                return this.buckets[i].value
            }
        }
        return undefined;
    }

    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}