# NP Completeness

-   O(n)^k - polynomial time
-   O(k)^n - exponential time

## Polynomial Time

A "reasonable" problem. All the problems (of size n) that can be solvable in polynomial time. Number of operations are proportional to power k of the size of input.

## Exponential Time

Number of operations are proprtional to the eponent of the size of input

## Deterministic

Where given a certain input, an algorithm will always produce the same output.

## Nondeterministic

Where an algorithm, given the same input, might exhibit different behaviors on different runs.

## NP-Hard and NP-Complete

-   P - the set of all decision problems that can be solved in polynomial time. easy to solve, easy to check
-   NP - nondeterministic polynomial problems. easy to verify, hard to check
-   NP-Complete - the hardest problems in NP
-   NP-Hard - problems that are at least as hard as NP-complete problems

## Reduction

Since any NP-complete problem can be reduced to any other NP-complete problem in polynomial time, all NP-complete problems can be reduced to any NP-hard problem in polynomial time.

## Resources

-   [What are the differences between NP, NP-Complete and NP-Hard?](https://stackoverflow.com/questions/1857244/what-are-the-differences-between-np-np-complete-and-np-hard)
-   [NP-Hard and NP-Complete Problems - Abdul Bari](https://www.youtube.com/watch?v=e2cF8a5aAhE&t=378s)
-   [ELI5 Polynomial Time and the P = NP debate](https://www.reddit.com/r/explainlikeimfive/comments/qp3ru/eli5_polynomial_time_and_the_p_np_debate/)
