var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = { value: value, next: this.head };
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    };
    LinkedList.prototype.delete = function (value) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        while (this.head && this.head === value) {
            this.head = this.head.next;
        }
        var currnetNode = this.head;
        while (currnetNode.next) {
            if (currnetNode.next.value === value) {
                currnetNode.next = currnetNode.next.next;
            }
            else {
                currnetNode = currnetNode.next;
            }
        }
        if (this.tail.value === value) {
            this.tail = currnetNode;
        }
    };
    LinkedList.prototype.inserAfter = function (value, afterValue) {
        var existingNode = this.find(afterValue);
        if (existingNode) {
            var newNode = { value: value, next: existingNode.next };
            existingNode.next = newNode;
        }
    };
    LinkedList.prototype.find = function (value) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return 'Not Found';
    };
    LinkedList.prototype.toArray = function () {
        var elements = [];
        var currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next;
        }
        return elements;
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.append(1);
linkedList.prepend("First Value");
linkedList.append('test');
linkedList.append(false);
linkedList.delete(false);
linkedList.inserAfter('new value', 1);
console.log(linkedList.toArray());
