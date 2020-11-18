---
title: "Public Finance"
date: "2020-11-04"
tags: ["development_policy", "incomplete"]
---

What is the role of government? How does it interact with the private sector?


Many economists think the government should only do things the private sector would fail at. Since the private sector is effective at matching supply and demand, it's efficient; however, being productively efficient doesn't mean everyone is taken care of or protected. Therefore the government regulates, redistributes, grants patents, builds roads, etc. Taxes pay for all of this. Taxes should be carefully considered since they carry logistical or distortionary costs. Stuff that can't be bought at the individual level or that others could piggyback off of tends to be the government's territory (e.g. military defense).

What follows are four categories of what the government does:

1) *Public Goods* are non-rival and non-excludable. Non-rival means you using something doesn't preclude someone else from using it since it's effectively non-depleting (are people's rights non-rival?). Examples of non-rival goods include clean air, clean water, and television. Non-excludable goods are public access. This means they're free to use for all. Examples include fireworks displays, military defense, and lighthouses.

2) The government also *corrects externalities*. Externalities are unintended side-effects. Negative externalities include smoking, pollution, and drunk driving. Positive externalities include vaccinations, sewer systems, and urban bike-sharing programs.

3) *Regulating the private sector* is sometimes necessary. Monopolies need regulation vis a vis antitrust actions. Companies poised to have too much power, in industries with a history of these things, such as in utilities, are a general example.

4) The government can *redistribute* and create *social safety nets*. Redistribution is about adjusting the level along a scale of equality, whereas social safety nets protect people against shocks.

Item no.4 poses unique challenge in developing countries, such as identifying who's poor enough to get help.

Another challenge is *taxation*.

*Taxation Challenges in Developing Countries:*

In developed countries, you have multiple sources to corroborate your income. Double reporting builds redundancy and allows cross-validation of people's information. This is feasible in formal markets. The problem is less tractable in informal markets. Data is lacking. Without communication between departments, it's difficult to measure or levy taxation.

Because of this, enforcement is necessary. This isn't an easy fix either, since enforcement is also susceptible to corruption. Tax collectors often have incentive to take bribes since those bribes are worth more than their incomes.

One way to accommodate these issues is by taxing large corporations. Large corporations are easier to monitor due to their reliance on banks and other resources. There's also more incentive because of how much money is churning through these companies.

Tariffs and border taxes are also easy to monitor.

Another two ways to tackle the information problem are value-added taxes and incentivizing tax collectors.

Value-added taxes (VAT) are a string of taxes along the supply chain, wherein your tax is specific to the value you add. If you added some value to a product, say \$50, whether by selling or manufacturing, that \$50 gets taxed. This is accomplished through credits discounting taxes from each node in the chain based off of what their predecessor/distributor paid.

If you evade taxes by claiming you generated less value than you did, the people who come before and after you would have to pay higher taxes. This is the enforcement mechanism for VAT, or at least, it's the theory.

To test this theory, Dina Pomeranz ran an experiment with the Chilean government. Her test presupposes a model with two possibilities. The first possibility is that firms evade VAT's through discrepancy. Discrepancy is simply what was described above -- specifically, people were either overstating their inputs or understating their sales. The second possibility is omission. This means firms omit the record of some product. Omission is only possible when all firms in the chain agree to omit.

Pomeranz told half of the firms in a chain that they were going to be audited. She then observed the ripple effects upstream and downstream of firms along various levels of the chain. She was looking for two effects here. One is that, once some middle firm is told it's being audited, its up- and downstream firms will be more honest. She predicted that the upstream firms, aka the suppliers, would be more honest than the downstream firms, aka the retail stores. After all, the downstream stores can still lie without being corrected by their customers or government. The second thing she predicted was that people would all *shift* towards more honesty, and that stores would shift more towards honesty than the other firms, since stores are probably lying more.


In regression ${Y_i}={\alpha}+{\beta TREAT_i}+{\gamma (TREAT_i * SUPPLIER_i)}+{\omega SUPPLIER_i}$. $TREAT_i$ and $SUPPLIER_i$ are simply dummy variables indicating whether or not the firm was treated (audited) or a supplier, respectively. The middle term is an *interaction* term. When you take the first derivative of this regression wrt $TREAT_i$, you get the effect of treatment on the outcome. When you take the derivative of *that* wrt $SUPPLIER_i$, you get ${\gamma}$, which is the difference in treatment between suppliers and non-suppliers.

**come back to this after reviewing power and variance**

Pomeranz is interested in changes within firms because different firms will vary in how much they pay in taxes, so she wants to reduce unexplained variance from the effect of the intervention. She does this by including pre-intervention outcomes in her regression at baseline ($POST_t$) **update this to include the complete regression**

She finds that ripples move upstream to have the suppliers pay much more in taxes. Evasion goes down for suppliers downstream **review**

<h3>Pakistan Tax Evasion</h3>

As I wrote before, the information problem causes many of the grievances in regards to tax evasion. Pomeranz's intervention and study is an example of how, where information is lacking, changing the tax system could help prevent tax evasion.

Tax inspectors are intended to assuage the information problem, which would be fine, except for that they're human. Humans tend to laziness or whatever benefits them most. If tax inspection is hard work, inspectors might fabricate shit. If it's expensive work, inspectors might accept bribes. Besides that, everything is manually entered and paper-based.

Khan, Olken, Khwa(?) et al examined the property tax department in Pakistan. Pakistan's challenge is interesting as only 9% of its GDP comes from its revenue. Contrast this with the 40% typical of developed countries.

The Pakistan tax department does its work by sending out tax inspectors. Olken's hypothesis was that these guys were under-reporting. The intervention they set forth was giving the inspectors a share of the taxes they collected (pay-for-performance).

They randomly assigned some inspectors across 500 tax offices (1 per neighborhood) to get a percentage based on the inspectors' histories. They get a share of however much extra they collect relative to what they typically collect. A couple of risks to this approach include 1) tax inspectors overvaluing property because then they get to tax more and therefore get a higher share of that tax and 2) bribers offering larger bribes to counter the shared incentive.

Tax and government revenue went up.

To think about the incentives between tax collector and taxpayer, we can use Nash bargaining.

Nash Bargaining describes a problem where two agents have to decide how they're going to split some money. If they don't come to an agreement, they both get squat. How they divvy it up is determined by some bargaining weight and the agents' outside option. That weight gets multiplied by the surplus minus both agents' outside options, plus the respective agent's outside option, e.g. ${\gamma}(1-{a_0}-{b_0}) +a_0$ for agent A. The higher one's outside option, the more bargaining power they have.

So if tax owed is ${\tau}^*$, and a tax collector agrees to dock ${\tau}$ in exchange for a bribe, then ${\tau}^*-{\tau}$ is the surplus. The bargaining space for a bribe occurs in this surplus. The outside option for the taxpayer is $-\tau^*$. The outside option of the tax collector is $0$. Thus, if the taxpayer's bargaining weight is $\gamma$, the tax collector gets $(1-{\gamma}-0)$, or $(1-{\gamma})$. Taking these factors together, the bribe is $(1-{\gamma})({\tau^*}-{\tau})$. The first parenthetical computes the share the collector gets depending on the bargaining weight.

Let's say now that the penalty to tax collector of getting caught is ${\beta}$. The share the collector can keep is $r$. The penalty can then be represented as ${\beta}({\tau^*}-{\tau})$.

Now we can write the joint surplus for both parties.

The taxpayer's surplus can be written as $[{\tau^*}-{\tau}-b]$, or the total amount of possible surplus minus the bribe they pay.

The tax collector's surplus can be written as $[r{\tau}-{\beta ({\tau^*}-{\tau)}}-r{\tau^*}+b]$. This is read as what they get from the bribe, minus the cost of the penalty and what they'd normally get paid, plus the bribe itself.


$[{\tau^*}-{\tau}-b]+[r{\tau}-{\beta ({\tau^*}-{\tau)}}-r{\tau^*}+b]$

This can be rewritten as $(1-r)({\tau^*}-{\tau})-{\beta}({\tau^*}-{\tau})$.

If we then assume someone decides to pay $0$ in taxes and just go full-on bribe, we get $(1-r){\tau^*}-{\beta}{\tau^*}$. When the incentive rate $r$ goes up, the surplus (or bribe space), goes down.

The bribe the tax collector collects is then their outside option plus what they get out of their joint surplus.

$r{\tau^*}+(1-{\gamma})[(1-r){\tau^*}-{\beta}{\tau^*}]$

**explicate how changes on $\beta$ and $r$ change outcomes** (higher r, high beta = higher revenue, fewer bribes; higher r, low beta = higher revenue, many bribes)

$\beta + r > 1$ no bribe. why? **explain mathematically**

**Outcomes**

Increase in government revenue >9%.
