const { createQueue } = require('./queue');

function createPriorityQueue() {
    const highPriorityQueue = createQueue();
    const lowPriorityQueue = createQueue();

    return {
        enqueue(item, isHighPriority = false) {
            isHighPriority
                ? highPriorityQueue.enqueue(item)
                : lowPriorityQueue.enqueue(item)
        },
        dequeue() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue();
            }

            return lowPriorityQueue.dequeue();
        },
        peek() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek();
            }
            
            return lowPriorityQueue.peek();
        },
        get length() {
            return highPriorityQueue.length + lowPriorityQueue.length;
        },
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
        }
    }
}

// const pq = createPriorityQueue();

// console.log(pq.isEmpty());

// pq.enqueue('clean room');
// pq.enqueue('fix table');
// pq.enqueue('buy groceries');

// pq.dequeue();

// pq.enqueue('Emergency task!', true);
// pq.dequeue();
// console.log(pq.length);