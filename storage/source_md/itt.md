---
title: "Intention-to-treat"
date: "2020-06-01"
tags: ["statistics", "definitions"]
published:false
---

<h3>Intention- or Intent-to-treat</h3>

While ideally we'd be comparing average treatment to average control to estimate our treatment effect, real life often complicates things. People who get treated despite being in the control group, or people in the treatment group who fail to get treated, are called noncompliers. This messes up the comparison between groups.

We can't drop the noncompliers, as that would introduce bias. After all, if someone in the control group denies treatment, that may have a significant reason for doing so that shouldn't be ignored. In the Balsakhi case for example, perhaps treatment members may have foregone treatment due to inability to travel.

We can't swap the noncompliers between control and treatment groups, as again, it would introduce bias. Randomized trials are stronger for having identical trial and control groups -- swapping noncompliers compromises that assumption.

The solution is to compare differences between the assigned control and treatment groups.

$ITT = {\overline{Y}_\textrm{Treatment} - \overline{Y}_\textrm{Control}}$

Run [linear regression](../regression) on $Score = \alpha + \beta \times Treatment + \epsilon$ to find the coefficients of treatment (a dummy variable that equals 1 if in a treatment group or 0 if in a control group). This gives us the mean difference between who's in the treatment group versus the mean of the control group.

While ITT may be useful for policymakers who just want to know the effect of introducing a program, this approach won't necessarily give the true treatment effect of if everyone had complied.



<h3>Treatment on the Treated (TOT)</h3>
