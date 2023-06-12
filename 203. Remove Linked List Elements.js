/*
❓ PROMPT
https://leetcode.com/problems/remove-linked-list-elements/
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

🔎 EXPLORE
List your assumptions & discoveries:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []

- if the linked list is null, return null

Insightful & revealing test cases:
Input: head = [4,5,1,9], node = 4
Output: [5,1,9]

Input: head = [], node = 1
Output: []

Input: head = [1], node = 1
Output: []

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:

Time: O(n)
Space: O(1)

null -> 4 -> 5 -> 1 -> 9
        p
             c
📆 PLAN
Outline of algorithm #: 
- if head is null, return null
- if the next of head is null and the value of head is equal to the value of given node, return null
- set a curr pointer point to head
- set a new head as new node(null, head)
- set a prev pointer point to new head
- as long as curr is not null
    - if curr is node
        - set prev.next = curr.next
    - else
        - set prev = curr
    - set curr = curr.next
- return newHead.next
🛠️ IMPLEMENT
function permute(word) {


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

💡 HELPFUL RESOURCE

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head || (!head.next && head.val === val)) return head;
  let curr = head;
  let newHead = new ListNode(-1, head);
  let prev = newHead;
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return newHead.next;
};
