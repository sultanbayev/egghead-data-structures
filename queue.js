function createQueue() {
    const queue = [];

    return {
        enqueue(item) {
            queue.unshift(item);
        },
        dequeue() {
            return queue.pop();
        },
        peek() {
            return queue[queue.length - 1];
        },
        get length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0;
        }
    }
}

module.exports = { createQueue }

// const q = createQueue();
// console.log(q.isEmpty());

// q.enqueue('Ninety One');
// q.enqueue('Moldanazar');
// q.enqueue('ARO');

// q.dequeue();
// q.dequeue();
// q.dequeue();
// console.log(q.isEmpty());
