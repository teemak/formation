class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def binary_tree_paths(root):
    if not root:
        return []

    def dfs(node, path, result):
        path.append(str(node.val))

        if not node.left and not node.right:
            result.append('->'.join(path))
        else:
            if node.left:
                dfs(node.left, path, result)
            if node.right:
                dfs(node.right, path, result)

        path.pop()

    result = []
    dfs(root, [], result)
    return result


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.right = TreeNode(5)

print(binary_tree_paths(root))
