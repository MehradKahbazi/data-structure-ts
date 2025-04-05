/**
 * Linked List Implementation
 */

class ListItem<T>{
    constructor(private value: T, private next?: ListItem<T> | null){}
}

export class LinkedList{
    public head:any = null;
    private tail:any = null

    constructor(){}

    append(value: any){
        const newNode = new ListItem<typeof value>(value);

        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head){
            this.head = newNode;
        }
    }

    prepend(value: any){
        const newNode = new ListItem<typeof value>(value, this.head);

        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
    }

    delete(value: any){
        if(!this.head){
            throw new Error("List is empty");
        }

        while(this.head && this.head === value){
            this.head = this.head.next;
        }

        let currnetNode =  this.head;

        while(currnetNode.next){
            if(currnetNode.next.value === value){
                currnetNode.next = currnetNode.next.next;
            } else{
                currnetNode = currnetNode.next;
            }
        }

        if(this.tail.value === value){
            this.tail = currnetNode;
        }

    }

    deleteHead(){
        if(!this.head){
            return null;
        }

        const deletedItem = this.head
        if(this.head.next){
            this.head = this.head.next
        } else{
            this.head = null;
            this.tail = null;
        }

        return deletedItem;
    }

    inserAfter(value: any, afterValue: any){
        const existingNode = this.find(afterValue);
        
        if(existingNode){
            const newNode = {value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    find(value: any){
        if(!this.head){
            throw new Error("List is empty");
        }
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return 'Not Found';
    }

    toArray(){
        const elements: ListItem<any>[] = [];
        let currentNode = this.head;
        while(currentNode){
            elements.push(currentNode);
            currentNode = currentNode.next;
        }
        return elements;
    }
}

const linkedList = new LinkedList()

linkedList.append(1);
linkedList.prepend("First Value")
linkedList.append('test');
linkedList.append(false);
linkedList.delete(false)
linkedList.inserAfter('new value', 1)


console.log(linkedList.toArray());
