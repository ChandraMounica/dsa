/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let resultHead = prev = new ListNode(-500,head);

    let curr = head;

    while(curr) {
        if(curr.next && curr.val == curr.next.val) {
            while(curr.next && curr.val == curr.next.val) {
                curr.next = curr.next.next;
            }
            prev.next = curr.next;
            curr = curr.next;
        } else {
            curr = curr.next;
            prev = prev.next;
        }
    }

    return resultHead.next;

};