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

const queue = new Queue(new LinkedList())

queue.enqueue(5);
queue.enqueue('this');
queue.enqueue('Hello');

console.log(queue.toArray());


