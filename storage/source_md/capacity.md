---
title: "capacity curve"
date: 
tags: ["development_policy"]
published: true
---

Let's establish a few relationships.

You get paid a piece wage. Your piece wage multiplies your productivity for the day, thus determining the day's income. Your productivity for the day is based on your nutrition for the day. Your nutrition for the day is determined by how much money you made yesterday.

eat [this much] today &rarr; work [this much] today &rarr; make [this much] today &rarr; eat [this much] tomorrow

If your inherited income today allows you to work more than you did yesterday, you can make more today. This will then allow you to work more tomorrow, and so on.

However, the converse applies as well. If your productivity yesterday affords you less food today, you make less money today, eat less tomorrow, make less tomorrow, and so on.

Say that in both of these scenarios, people's income-productivity relationships eventually stabilize. If they're in a range that neither allows them to make so much more that they rocket into another income bracket, nor allows them to make so much less that they can't get back to where they began, they're in a stable steady state.

What if they were in a situation that could go either way? If you make a bit more and you ride high. Make a bit less and you tumble into inescapable poverty. They'd be in an unstable steady state (steady because it does eventually converge *somewhere* - high or low).

**graph and elaborate**
To capture the phenomenon of making enough today to work the same tomorrow, we use a 45 degree line. Stable steady states converge from either side of a point on this 45 degree line. *Un*steady steady states would too, but if you're in the unstable steady state and *above* the 45 degree line, you go high, and if you're below it, you tumble. The 45 degree line is a *mapping* of today's income then placed to tomorrow's income. In order to intersect the 45deg line from below, the slope of linking income today to income tomorrow must be *greater than* 1 (since 1 is the slope of the 45deg line).

Since nutrition today is a result of income today -- $n_t = g(y_t)$ -- and nutrition today leads to income tomorrow -- $y_{t+1} = f(n_t)$ -- this can also be written as $y_{t+1} = f(g)$. Taking the derivative of this composite function using the chain rule gives us $f^\prime g^\prime$. This needs to be greater than 1 in order to intercept the 45 degree line from below and give us an unstable steady state, or poverty trap.

$f^\prime g^\prime$ can be rewritten in terms of elasticities.

$\frac{f^\prime}{f} g$ represents how much, as a percentage, income tomorrow changes when nutrition today changes.

$\frac{g^\prime}{g} y$ represents how much, as a percentage, nutrition today changes when income today changes.

Setting $\frac{f}{y} = 1$ gives us the 45deg. line since it represents income tomorrow and income today as equal.

If there is a particular point for which $\frac{f^\prime}{f} g * \frac{g^\prime}{g} y > 1$, i.e. there's a steep payoff in productivity for nutrition, we can expect people to prioritize this point and eat more to reach it. If they were stuck south of an unstable steady state and any shock could send them rolling, they'd have strong incentive to shoot past the line.

With all of this in mind, let's see [what the tests say](../../satisfying_a_poverty_trap).



