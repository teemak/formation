import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def enqueue(self, value, priority):
        heapq.heappush(self.heap, (priority, value))

    def dequeue(self):
        if self.is_empty():
            raise IndexError('Priority queue is empty')
        return heapq.heappop(self.heap)[1]

    def peek(self):
        if self.is_empty():
            raise IndexError('Priority queue is empty')
        return self.heap[0][1]

    def is_empty(self):
        return len(self.heap) == 0

    def size(self):
        return len(self.heap)

    def print_queue(self):
        print(self.heap)

pq = PriorityQueue()
pq.enqueue('task1', 3)
pq.enqueue('task2', 1)
pq.enqueue('task3', 2)

pq.print_queue()

print(pq.dequeue())
pq.print_queue()
