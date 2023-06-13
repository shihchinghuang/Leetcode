/*

❓ PROMPT
https://leetcode.com/problems/rotate-list/description/

Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]

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
function rotateRight(head, k) {
  if (!head || k === 0 || !head.next) return head;

  let len = 1;
  let tail = head;
  while (tail.next) {
    len++;
    tail = tail.next;
  }
  tail.next = head;
  k %= len;
  let count = len - k;
  while (count > 0) {
    count--;
    head = head.next;
    tail = tail.next;
  }
  tail.next = null;
  return head;
}
