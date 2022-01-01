---
title: "RCT Threats and Analysis"
date: "2020-05-31"
tags: ["rct_design"]
published:false
---


Threats and Analysis:

Don Green says to remember 3 core assumptions when going into field experiments: design, analysis, and interpretation.

Noncompliance is when members of treatment don't get their treatment, or control members do get it (crossover).

Attrition is people peacing from your study or not being available to answer stuff. Spillovers are another potential threat.

5 kinds of spillovers:
-
-
-
-
-

Generalizability:


Don Green randomized airing messages across half of 60 radio propogation areas poking fun at vote buying.

His Uganda study randomly assigned 56 villages messages in the form of vignettes, of teacher absenteeism, domestic violence, or abortion. They were aired in commercial breaks of film festivals. This has noncompliance in the issues of followup interviews, since the people they interview later may or may not have seen the previously aired vignettes. Additionally, spillover of people discussing the vignettes.

Core assumptions of the Potential Outcomes / Rubin-causal model:

- Random assignment. People mess up by not comparing the randomly assigned groups.
- Non-interference: the potential outcome is unaffected by how other treatments are allocated
- Excludability: no "incidentally correlated" factors influencing results -- asymmetry should ideally not happen. Symmetry in enumerating, measuring treatment and control. Blind where possible! It's only the randomized program effect and nothing else.

Noncompliance happens. Buureacratic incomptetence happens.

People do what they want. In some cases, an encouragement design is used. Maybe because everyone is entitled to some program, maybe because there's no better way, really, to get more people involved. This will require different analysis (intention to treat, maybe?).

We assume that having been invited to the program doesn't effect the people so much as the program does.

So how do we handle noncompliance?

If people don't show up for the treatment, or people show up uninvited, handling them by switching the uninvited into the treatment would introduce bias. Dropping noncompliers would also be biased.

Addressing noncompliance statistically:
[instrumental variables estimator]

One-sided noncompliance is one group (say the treatment group) reaches and treats some people, whereas the control group has no one who doesn't comply.

Compliers and never-takers are *potential* outcomes. Compliers would *only* take the treatment **if** assigned to the treatment groups. Never-takers would never take the treatment. There are untreated compliers in the control group.

In the case of one-sided noncompliance, we're interested in finding the average treatment effect among compliers.

${P_\textrm{c}}$ is the probability untreated compliers empathize with ostracized women (abortion), ${P_\textrm{n}}$ is the probability untreated Never-takers empathize.

${a}$ is the proportion of compliers in the subject pool, and ${T}$ is the ATE among compliers.

We *won't* asssume that the compliers and never-takers are similar, and still identify $T$. In a properly randomized experiment, we assume compliers and never-takers are similar in ratio to each other across both treatment and control groups. We can draw an estimate of never-takers in both groups by seeing the proportion of never-takers in the treatment group.

The expected outcome in the control group is ${E_\textrm{0} = {\alpha P_\textrm{c} + (1 - \alpha) P_{n}}}$.

The expected outcome in the treatment group is ${E_\textrm{1} = \alpha(P_\textrm{c} + T) + (1 - \alpha)P_{n}}$.

${E_{1} - E_{0} = \alpha T}$. Some factor $\alpha$ accounts for the noncompliance. This is also known as the [intent-to-treat (ITT)](../itt).

However, we may want to isolate $T$.

${T^* = (E^{*}_{1} - E^*_{0})/\alpha^*}$ takes the difference in the actual outcomes and divides them by the amount of actual compliers. This is called the [instrumentals variable estimator](../iv).

Complier Average Causal Effect (what is called $$T^*$$ here), aka CACE.
Local Average Treatment Effect (LATE). Same thing -- local in that it applies to compliers. It can also be thought of as the ITT among compliers.

In the example of exposing villages to vignettes designed to promote empathy, 68% of the assigned groups actually showed up to get treated. 75% of the treatment group showed empathy (do the right thing for the girl) as opposed to 70% in the control group -- a 5% improvement. Plugging into the CACE ${T^* = (E^{*}_{1} - E^*_{0})/\alpha^*}$ gets us $(.7560 - .7079)/.6820 = 0.705$, or roughly 7.1%. This is larger than the [standard deviation](../sd) between villages.

Comparing ITT to CACE is nice to address noncompliance, as it gives you the measure of just the treatment.

Alternative design: Placebo

Compare compliers in the assigned treatment to the compliers in the assigned control. This allows a greater level of precision.

<h3>Attrition</h3>

[consult inbox notebook]
