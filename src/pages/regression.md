---
title: "Linear Regression"
date: "2020-06-16"
tags: ["statistics", "definitions"]
---

For a regression, we set a series of independent variables and their regression coefficients, or ${\beta}$s (betas), to be equal to the outcome, aka the dependent variable. We then observe how the outcome changes for every unit of change in the $\beta$s. Regressions as such only capture what we give it. Any additional uncertainty or information is represented by $\epsilon$, or the error term. It averages to $0$.

The beta coefficient represents how much of a change we see in the outcome per unit of that $\beta$.

Dummy variables are binary, so for example might indicate treatment - 1 - as opposed to control, or untreated - 0. Therefore, if someone is left untreated (0), the beta coefficient there is multiplied by that 0. This is the same as saying "This $\beta$, or affect on the outcome, isn't correlated with treatment."

We also add control variables to take into account variables that might affect our outcome of interest. This makes sense, since we really want to isolate effects of, say, treatment, and don't want to confuse that with anything else.

Well-designed RCT's effectively eliminate the need for control variables, since both treatment and control groups are potentially identical to each other, so regression is mostly useful for comparing groups that may be different from the get.

The goal is to have the groups' differences accounted for, such that when you subtract, say, the control group's results from the treatment group's results, you're only left with the treatment $\beta$ coefficient.


