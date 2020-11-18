---
title: "Restart Complex Data"
date: "2020-10-29"
tags: ["complex_data", "cs"]
---

Self-reference means just that -- for example, a list of some arbitrary breadth, while referring to a list of that type (e.g. ListOfColor is either `empty` or `cons Color ListOfColor`)

Mutual reference means two data types that refer to each other. For example, "ListOfElement" contains type "Element," and type "Element" contains type "ListOfElement." This allows the cycle between these two to be arbitrarily deep.

Arbitrary arity trees can be represented this way.

It can be helpful to draw out the connections between data types.



```racket

```

Udi Manber's Intro to Algorithms:

