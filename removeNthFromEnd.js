/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let totalNodes = 0;

    let temp = head;
    while(temp) {
        totalNodes++;
        temp = temp.next;
    }

    //below condition not required as 1 <= sz <= 30
    if(totalNodes == 0)
        return head;

    let nodePosFromStart = totalNodes - n + 1;

    //not required as 1 <= n <= sz
    if(nodePosFromStart > totalNodes)
        return head;

    let dummyNode = new ListNode(-1, head);

    let prevNode = dummyNode, currNode = head;
    for(let i=1; i<nodePosFromStart; i++) {
        prevNode = prevNode.next;
        currNode = currNode.next;
    }

    prevNode.next = currNode.next;
    currNode.next = null;

    return dummyNode.next;
    
};