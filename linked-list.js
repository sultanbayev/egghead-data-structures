function createNode(value) {
    return {
        value,
        next: null
    }
}

function createLinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        push(value) {
            const node = createNode(value);

            if (this.length === 0) {
                this.head = node;
                this.tail = node;
                this.length = 1;
                return node;
            }

            this.tail.next = node;
            this.tail = node;
            this.length++;
            return node;
        },
        pop() {
            if(this.isEmpty()) {
                return null;
            }

            const node = this.tail;

            if (this.tail === this.head) {
                this.tail = null;
                this.head = null;
                this.length = 0;
                return node;
            }

            let current = this.head;
            let penultimate;
            while (current) {
                if (current.next === this.tail) {
                    penultimate = current;
                    break;
                }
                current = current.next;
            }
            penultimate.next = null;
            this.tail = penultimate;
            this.length--;
            return node;
        },
        get(index) {
            if (index < 0 || index > this.length - 1) {
                return null;
            }

            if (index === 0) {
                return this.head;
            }

            if (index === this.length - 1) {
                return this.tail;
            }

            let current = this.head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
            return current;
        },
        delete(index) {
            if (index < 0 || index > this.length - 1) {
                return null;
            }

            if (index === 0) {
                const deleted = this.head;
                this.head = this.head.next;
                this.length--;
                if (this.length === 0) {
                    this.tail = null;
                }
                return deleted;
            }

            let current = this.head;
            let previous;
            let i = 0;
            while(i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            const deleted = current;
            previous.next = current.next;
            if (previous.next === null) {
                this.tail = previous;
            }
            this.length--;
            return deleted;
        },
        isEmpty() {
            return this.length === 0;
        }
    }
}

const list = createLinkedList();

list.push('one');
// list.push('two');
// list.push('three');
// list.push('four');
// list.push('five');

// console.log(list.delete(0))
// console.log(list.isEmpty());