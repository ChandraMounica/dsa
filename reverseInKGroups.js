/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {

    let dummy = new ListNode(-1, head);

    let begin = dummy, count = 0;

    while(head) {
        count++;
        if(count%k == 0){
            begin = reverseBtwStartAndEnd(begin,head.next);
            head = begin.next;
        }else {
            head = head.next;
        }
    }

    return dummy.next;
    
};

function reverseBtwStartAndEnd(start,end) {
    let leftPrev = start;
    let first = curr = start.next;
    let prev = null;
    while(curr != end) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    first.next = curr;
    leftPrev.next = prev;

    return first;
}

let head = new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
reverseKGroup(head, 2);