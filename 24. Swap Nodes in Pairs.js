/*

❓ PROMPT
https://leetcode.com/problems/swap-nodes-in-pairs/description/
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]


🔎 EXPLORE
List your assumptions & discoveries:

Insightful & revealing test cases:

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()

📆 PLAN
Outline of algorithm #: 



🛠️ IMPLEMENT
function name() {

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

💡 HELPFUL RESOURCE

*/
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  while (head && head.next) {
    let first = head;
    let second = head.next;
    prev.next = second;
    let temp = second.next;
    second.next = first;
    first.next = temp;
    prev = first;
    head = head.next;
  }
  return dummy.next;
};
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let curr = head;
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  while (curr && curr.next) {
    prev.next = curr.next;
    let first = curr.next;
    let second = curr.next.next;
    first.next = curr;
    curr.next = second;
    prev = curr;
    curr = curr.next;
  }
  return dummy.next;
};
