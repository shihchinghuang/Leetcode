/*

❓ PROMPT
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
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

var subsets = function (nums) {
  const res = [];
  function helper(sub, i) {
    if (i >= nums.length) {
      res.push(sub.slice());
      return;
    }

    sub.push(nums[i]);
    helper(sub, i + 1);
    sub.pop();
    helper(sub, i + 1);
  }
  helper([], 0);
  return res;
};
