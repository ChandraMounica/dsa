/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    if(left >= right)
        return head;

    let dummyNode = new ListNode(-1, head);

    let leftPreNode = dummyNode, currNode = head;

    for(let i=1; i<left; i++) {
        leftPreNode = leftPreNode.next;
        currNode = currNode.next;
    }

    let subListHead = currNode;

    let prevNode = null;
    for(let i=1; i<=right-left+1; i++){
        let nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;    
    }

    subListHead.next = currNode;
    leftPreNode.next = prevNode;

    return dummyNode.next;
    
};

reverseBetween(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))), 2, 4);