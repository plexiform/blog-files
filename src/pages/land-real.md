---
title: "Land"
date: "2020-10-18"
tags: ["development_policy", "incomplete"]
---

Researchers tracked farm output in Northeast Brazil; Punjab, Pakistan; and Muda, Malaysia. They observed that large farms yielded less output per hectare than small farms. While there may be myriad reasons for this, conjecture for a moment that a farm's size in and of itself causes a farm's output. This would be fantastic. After all, the government could redistribute larger farms' lands and increase both efficiency and equity. Problem solved. Alas, it was shown that the profit-wealth ratio was greater for small farmers than for large farmers. They're doing something differently.

Why is that? What is that? Is it that small land is more easily managed? If that's the case, don't large farms have more room for better equipment? Perhaps the large farms are so large because they have more productive farmers that generate more profit; maybe they have more capital (they do). Given these advantages, it doesn't *have* to be the case that smaller farms are more productive.

A little foggy, then, why it *is* the case. The fog begins to thin when we observe that large farms are that much more likely to rent land, whereas small farms are more likely to be cultivated by their owners. The smaller farmers have less to lose on someone else's land, and more to lose on their own. Does this mean they don't try as hard when renting land?

Biswanger and Rosenzweig are on the case. Using data collected by the International Crops Research Institute for the Semi-Arid Tropics (ICRISAT), which recorded detailed data for so many households, B&R formulate this regression:
$\Pi{_i}{_j} = \alpha + {\beta}R_j+ {\eta}_i+v_j$.

$\Pi$ is profits of individual $i$ on plot $j$. $R$ is a dummy variable representing whether or not the farm is rented; $\eta$ accounts for the farmer's characteristics, whether they be tenacity or what have you; $v$ is a residual term for undetermined variance or influence on the results.

The regression asks, "To what extent are profits determined by rent-status and by the farmer's characteristics?" Unfortunately, it's possible to conflate the two characteristics in the regression above. A farmer might be hardworking. Or they might be trying harder for their plot. Or both. We wouldn't know which of these factors lead to their profits. We need to compare one farmer's output on their own land with their output on someone else's.

So sprouts this regression: ${\Pi{_i}{_2}}-{\Pi{_i}{_1}}=\beta(R{_i}{_2}-R{_i}{_1})+vi_2-vi_1$. Same farmer, different plots. Farmers work harder on their own plots than rented plots. Additional work using this data also controls for additional factors, such as plot quality and inputs to the land. Our conclusion stands.

Imagine then that you're the owner of a large farm. You enjoy excess, languishing land, and decide to put it to use. While renting your land out seems promising, you suspect, as is proven above, that you won't get good labor for nothing. You can't observe the effort of your tenants - that would be time consuming, costly, and altogether redundant. Incentives are necessary.

In the models I'll be explicating below, the variables are as follows:

* $c$ - cost of effort
* $e$ - effort itself
* $H$ - high (non-zero) output
* $e*H$ - probability of high output
* $(1-e)*0$ - probability of low (zero) output
* $R$ - cost of rent
* $h$ - pay for high output
* $l$ - pay for low output

A tenant's effort is modeled as $\frac{1}{2}c*e^2$. This means their marginal effort is $ce$, and that additional effort is costly.

Various contracts can be implemented. A wage contract means you get paid a certain amount over some span of time irrespective of your performance, i.e. $h=l$. A fixed rent contract is just that, where your rent is exacted from your output. The downside is if your output is zero, you still pay; i.e. $H-R$ or $0-R$. Landlords and tenants can also sharecrop, which is to simply share a predetermined amount of your output.


[article needs finishing]
