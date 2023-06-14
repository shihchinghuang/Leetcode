/*

❓ PROMPT
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

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

var permute = function (nums) {
  const res = [];
  const helper = (sub) => {
    if (sub.length === nums.length) {
      res.push(sub.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (sub.includes(nums[i])) continue;
      sub.push(nums[i]);
      helper(sub);
      sub.pop();
    }
  };
  helper([]);
  return res;
};
