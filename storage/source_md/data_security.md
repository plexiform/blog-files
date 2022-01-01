---
title: "Data Security"
date: "2020-08-06"
tags: ["rct_design"]
published:false
---

Information is everywhere, and is used to create insights that affect everyone's day-to-day lives. This is a double-edged sword, as information can be used to augment our lives -- or harm them. Nowadays, people are actively and willingly sharing their information with others. However, they may not be aware of the repercussions therein. For example, outsiders can glean seemingly unrelated information, such as where you live, based on your exercise patterns. Then there's the issue, as in the case of online mugshot databases, of previously public but difficult to access information, being made much more accessible. This has lead to people exploiting this information by charging for it, and new laws being put in place as a result.

There are ethics, and then there's the law. The law is *supplementary* to ethics. Many unions and countries recognize an individual's right to privacy, and have instituted enforceable standards to prevent informational harm. There are many laws in [and coming into] existence about information protection, privacy, and security. Public sentiment is that people's information is out of their control and to some extent gotten out of hand when being handled by certain companies. It's on researchers to understand not only the legal environment they're navigating, but the rights and concerns of their research subjects, since the researchers are in a unique position of insight of their subjects.

Risks increase with the dissemination and interconnection of information. Opportunities for infiltration and exploitation. Blackhat hacking has been getting out of hand. Even in the case of "consentual" information collection, it can be compelled or used in a way that doesn't account for myriad potential uses of that information (Havasupai tribe, IRA tapes, etc.).

It's therefore important to account for unintended inferential disclosure (Netflix -> IMDB; Facebook "gaydar"). The prevalence of probabilistic matching based on unrelated patterns has scary potential. You can identify people from behavioral fingerprints, disease incidence, search queries, etc.

Research can be harmful in the wrong hands.

Research *participant* harm is of particular importance, as it's more likely to concern than other harm from research. We want to protect participant rights and interests.

Information *security* is protecting and controlling access, manipulation, or destruction. Contrast this with information *privacy*, which encompasses how information might be shared, used, or abused. Information privacy delineates boundaries.

Information utility is the antithesis of information privacy.

We want to consider privacy and security all throughout the research process, from design, to implementation, to analysis. It's critical that we consider the worst case scenarios and who might be harmed by what. If data gets out there, how will it affect our participants? Will they be stigmatized? Discriminated against? Hurt through any mechanism at all? It can help to rank order of harm and proceed accordingly. Sensitivity of information depends on the vulnerability of the participant's *population.* It's therefore important to identify risks given some population, such as matters of agency and risk of persecution in those contexts.

So, we want to make measurement choices about our information so as to calibrate and mitigate risk. One approach is to zone in on only pertinent information, veering away from sensitive information. This *data minimization* prevents unintended consequences that spreads out the risk-benefit ratio. Another approach is to use proxies for sensitive information, or use a "histogrammatic," binned response. We can also randomize who gets asked what question, which makes it difficult for anyone reading the data to know what was being responded to. We can also ask a group at a time as opposed to individuals. We want to iterate at every cycle and account for risks during the lifestyle.

Consent is critical. Restrict access to raw information. De-identify the data.

We want to protect data collection. Whether it's our means of recording data or of sending it -- or even when directly observing information, it's necessary to safeguard the collection stage. We want to encrypt sensitive data, including when transmitting it, and store it in a secure server. Trust thy vendors.


We then may want to transform our data, whether through data partitioning (split it up), data redaction (cut it out), or data encryption (mess it up). Data partioning can be seen as the inverse of merging and appending. Usually data is partitioned according to sensitivity and handled in a way to match that sensitivity. Segregated parts can then be linked through secure keys.

Data redaction is useful for de-identification. We can also use data redaction for data minimization -- cutting out sensitive information. While useful, data redaction isn't usually enough to eliminate risk.

Encryption. We can encrypt at the file level, the storage level, and the database level. Transmissions and computations can be encrypted as well. Consider implications of encryption in transmission and management, as well as destruction.

What are areas of data vulnerability?

Natural threats such as flooding or fires don't compromise confidentiality. However, human threats, unintentional or otherwise, can compromise confidentiality.

Data may be vulnerable during some point of an application's lifecycle, or across networks. It may be vulnerable in the physical space, such as a drive just laying there. Social engineering can also pose a threat.

Access control watches who accesses what and why. There are authorization protocols as well as logging of user actions.



---


We want to prevent people from being identified. People's data can be directly linked to some outside database, and we can attempt to control for this somewhat loosely, but that isn't so secure. We can make it so that things are at most "k-anonymous," or identifiable in a cluster but not personally (meaning that "k" people share X traits). If we want to *guarantee* confidentiality, we can bound how much total anyone can learn from data of any individual. This can be a challenging task.

There are a few ways of de-identifying information to the point that we reach the standards listed in the paragraph above. We can generalize information so some datum doesn't stand out or mean anything, we can remove or suppress information, add noise to information, etc. In publishing data, we can supply summaries, visualization, or microdata, or make the information interactive so as to have some more control over what gets out and how it can be interpeted.

Because all data risks leakage, and ultimate privacy costs zero information, we need to adjust our tools to the level of sensitivity. Essentially, we want to treat the risks associated with the data as on a spectrum, establish boundaries such as notices of consent, going through an IRB, or encryption depending on the case. This goes hand-in-hand with what information we're sharing and how we're doing so.

We're taking care of our research subjects. Notify them of their rights over their data, identify identifiable traits, and keep subjects in the know as necessary. This includes their being compromised.

---

There are many frameworks that help define information controls. They help align your research and data security goals with the law. Federal, private, and commercial privacy frameworks all exist (FISMA, ISO/IEC 27000, and FIPPS, respectively). These frameworks can help design our approach to data security. Depending on risks and vulnerabilities, we're given a way of aligning our information control with them.

We then want to map (i.e. document) our controls and how they're embedded in the information lifecycle.
