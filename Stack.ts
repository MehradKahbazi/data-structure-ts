/**
 * Stack structure implemented on LinkedList Structure
 */

import { LinkedList } from "./LinkedList";
class Stack{

    constructor(
        private linkedList: LinkedList
    ){}

    push(value: any){
        this.linkedList.prepend(value)
    }

    pop(){
        return this.linkedList.deleteHead()
    }

    isEmpty(){
        return !this.linkedList.head;
    }

    toArray(){
        return this.linkedList.toArray();
    }
}