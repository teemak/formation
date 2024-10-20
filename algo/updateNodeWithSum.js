function solution(root) {
    if (!root) return null;
    let queue = [root];

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();            
            let sum = 0;

            if (node.left) {
                sum += node.left.value;
                queue.push(node.left);
            }

            if (node.right) {
                sum += node.right.value;
                queue.push(node.right);
            }

            if (sum) {
                node.value = sum;
            }
        }
    }
    
    return root;
}
