/*

❓ PROMPT
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

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
var addTwoNumbers = function (l1, l2) {
  if ((!l1 && !l2) || (l1 && !l2)) return l1;
  if (!l1 && l2) return l2;
  let c1 = l1;
  let c2 = l2;
  let carry = 0;
  let res = new ListNode(-1);
  let cr = res;
  while (c1 || c2) {
    v1 = c1 ? c1.val : 0;
    v2 = c2 ? c2.val : 0;
    let sum = v1 + v2 + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    cr.next = new ListNode(sum);
    cr = cr.next;
    c1 = c1?.next;
    c2 = c2?.next;
  }
  if (carry) cr.next = new ListNode(1);
  return res.next;
};
