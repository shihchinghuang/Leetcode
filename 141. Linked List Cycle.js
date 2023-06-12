/*

❓ PROMPT
https://leetcode.com/problems/linked-list-cycle/
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


🔎 EXPLORE
List your assumptions & discoveries:
- if the head is null, return null
- if there's only one node in the linked list, return false

Insightful & revealing test cases:

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: using a set to store nodes
Time: O(N)
Space: O(N)

Algorithm 2: using two pointers to check
Time: O(N)
Space: O(1)

📆 PLAN
Outline of algorithm #1: 
- create a new set to save all the nodes
- create a helper function
    - base case 1 would be if the node is in the set, return true
    - base case 2 would be if the node is exhausted which means node is null, return false
    - if not hitting any of the base cases, add the node into the set
    - recursive call for the next node

Outline of algorithm #2: 
- create a fast pointer to the head
- create a slow pointer to the head
- as long as fast and fast.next and slow is not null
    - fast = fast.next.next
    - slow = slow.next
    - if slow = fast, return true
- return false


🛠️ IMPLEMENT
function name() {

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

💡 HELPFUL RESOURCE

*/
var hasCycle = function (head) {
  const set = new Set();
  function helper(head) {
    if (set.has(head)) return true;
    if (!head) return false;
    set.add(head);
    return helper(head.next);
  }
  return helper(head);
};

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head;
  let slow = head;
  while (fast && fast.next && slow) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};
