/*

❓ PROMPT
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.

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
var combine = function (n, k) {
  const res = [];
  function helper(start, n, k, sub) {
    if (sub.length === k) {
      res.push(sub.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      if (sub.includes(i)) continue;
      sub.push(i);
      helper(i + 1, n, k, sub);
      sub.pop();
    }
  }
  helper(1, n, k, []);
  return res;
};
