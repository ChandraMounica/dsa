/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    if(!root)
        return true;

    let minValue = Number.MIN_SAFE_INTEGER, maxValue = Number.MAX_SAFE_INTEGER; 

    return isValidBSTHelper(root, minValue, maxValue);
    
};

isValidBSTHelper = function(root, minValue, maxValue){

    if(!root)
        return true;

    return (root.val > minValue && root.val < maxValue) && isValidBSTHelper(root.left, minValue, root.val) &&
    isValidBSTHelper(root.right, root.val, maxValue);
    
}