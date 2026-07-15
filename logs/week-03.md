# Week 3

**Dates:** 06-15 to 06-21

## Goals
- Read Bahmani, Mehta, and Motwani's *Online Graph Edge-Coloring in the Random-Order Arrival Model*.
- Specifically investigate Conjecture 3.12: the non-negativity of a recursively defined sequence $c_\ell$ underlying the paper's near-optimal $K$-round competitive ratio claim.


## Approach and Implementation
Over the weekend, Dr. Srinivasan recommended that Javier and I look into Conjecture 3.12 in Bahmani, Mehta, and Motwani's *Online Graph Edge-Coloring in the Random-Order Arrival Model*, and soon after, Dr. Peng let us know that ChatGPT actually came up with a proof for the conjecture. With that in mind, I spent Monday and Tuesday reading and understanding the paper. Tuesday, I met with Javier and we looked over the ChatGPT-provided proof for the conjecture, coming to the agreement that ChatGPT's proof is indeed correct.

Wednesday and Thursday, I spent doing a little more Lean and helping re-write the proof for Conjecture 3.12. Friday I again met up with both professors, and we discussed the progress for this week and decided to keep going with the paper-reading and problem-exploration for next week.


## Results
- **Resolved Conjecture 3.12**, establishing the non-negativity of the $c_\ell$ sequence needed for the paper's claim that $K = O(\log(\Delta/\log n))$ rounds gives a competitive ratio of $1 + O(1/\log K) + o(1)$.
- Finished the learning the basics of Lean this week.

This was the strongest technical result of the summer so far. The conjecture was explored at the recommendation of Dr. Srinivasan, the proof was found by Dr. Binghui prompting ChatGPT, and then verified by Javier and I.


## Notes
No notes for this week.

