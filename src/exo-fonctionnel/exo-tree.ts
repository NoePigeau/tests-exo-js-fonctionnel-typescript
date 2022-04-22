
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
  }


 const inorderTraversal = (root: TreeNode | null): number[] => {
     let node = root;
     let solution: number[] = [];

     while(node !== null) {
        let pre = node.left;

        if(node.left !== null) {
            while(pre && pre.right !== null && pre.right !== node) {
                pre = pre.right
            }
            if(pre && pre.right === null) {
                pre.right = node;
                node = node.left;
            }else if(pre) {
                pre.right = null;
                solution.push(node.val)
                node = node.right
            }
        }else {
            solution.push(node.val)
            node = node.right
        }
        
     }
     return solution
};