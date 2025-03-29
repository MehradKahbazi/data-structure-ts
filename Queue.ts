/**
 * Queue structure implemented based on LinkedList Structure
 */

import {LinkedList} from './LinkedList';
class Queue{
    constructor(private linkedList: LinkedList){}

    enqueue(value: any){
        this.linkedList.append(value)
    }

    dequeue(){
        return this.linkedList.deleteHead();
    }

    isEmpty(){
        return !this.linkedList.head;
    }

    toArray(){
        return this.linkedList.toArray();
    }
}