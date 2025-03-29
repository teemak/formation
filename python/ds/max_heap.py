class MaxHeap:
    def __init__(self):
        self.heap = []

    def _parent(self, index):
        return (index - 1) // 2

    def _left_child(self, index):
        return 2 * index + 1

    def _right_child(self, index):
        return 2 * index + 2

    def _heapify_up(self, index):
        parent = self._parent(index)
        # diff from min heap
        if index > 0 and self.heap[index] > self.heap[parent]:
            self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
            self._heapify_up(parent)

    def _heapify_down(self, index):
        left = self._left_child(index)
        right = self._right_child(index)
        largest = index

        # diff from min heap
        if left < len(self.heap) and self.heap[left] > self.heap[largest]:
            largest = left
        if right < len(self.heap) and self.heap[right] > self.heap[largest]:
            largest = right

        if largest != index:
            self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
            self._heapify_down(largest)

    def insert(self, value):
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    # this will always be at top so, min heap has same method
    def extract_max(self):
        if len(self.heap) == 0:
            raise IndexError('Heap is empty')
        if len(self.heap) == 1:
            return self.heap.pop()

        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._heapify_down(0)
        return root

    def peek(self):
        if len(self.heap) == 0:
            raise IndexError('Heap is empty')
        return self.heap[0]

    def size(self):
        return len(self.heap)

    def is_empty(self):
        return len(self.heap) == 0

    def print_heap(self):
        print(self.heap)


heap = MaxHeap()
heap.insert(10)
heap.insert(5)
heap.insert(20)
heap.insert(2)

heap.print_heap()


