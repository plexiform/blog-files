import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <p>
      “I hear artificial light confuses a moth's sense of direction.”
      <br />
      <br />
      “Surely not.”
      <br /><br />
      “Look! Do you see those many suns, suspended in a line?”
      <br /><br />
      “Surely they'll take us home.”
      <br /><br />
      <hr />

      Our screens sleep in our pockets. <i>Click</i>— we unlock the curtains, our faces cast in the same frantic wavelengths that color our sky. Flashing signals splash the synapses; our prefrontal cortices set like plaster of paris.

      <br /><br />
      Are we changing? If so, is that change meaningful? Are we pulled to truth or to spectacle? Alan Jacobs borrows terms from Thomas Pynchon's “Gravity's Rainbow,” urging us to build our <i>personal density</i> by expanding our <i>temporal bandwidth</i>.
      <br /><br />


      <br /><br />
      But it seems to me that most of the developed world is caught in its homespun web. Are we just countless moths, making small talk?
      <br /><br />
      <hr />
    </p>
    <p>
      “Given that most platforms are developed in high- or middle-income countries, developing nations could potentially face the risk of becoming increasingly subject to the market power of foreign companies.”
      https://blogs.worldbank.org/jobs/can-technology-reshape-world-work-developing-countries

      https://www.un.org/fr/desa/data-economy-path-prosperity-or-dystopian-future

      https://courses.cs.washington.edu/courses/cse490z/11au/project.html
    </p>
    <p>grain that i move with: programming, writing, drawing (on screen and off), modeling, understanding (people and culture), creating nets, how we go from being of the earth to seeing it</p>
    <p>
      network assimilation (how do cultures travel and assimilate - roads in china, radio propagation)
      ; power systems (grid, wind turbines etc.)</p>


    {/*
    <ul>
      <li>to be emotionally vulnerable</li>
      <li> in awe, bringing primal humanity and beauty back to technology</li>
      <li>adopting a strategic approach to life, leveraging high-impact decisions and risks and navigating uncertainty (probability theory, game theory [calculus, discrete, linear])</li>
      <li>This blog is a living thing. Consider it self-reflective, wherein the act of iterating upon  it improves skills (e.g. writing, coding, UX, math, sims) and habits (e.g. journaling, habit-making and -tracking).</li>
      <li>These include my habits of thought. For example, any edits I make to turn a pessimistic (permanent-bad, pervasive-bad) thought into an optimistic one (permanent-good, pervasive-good) will be kept in the open for transparency. </li>
      <li>This is critical: the blog is a reflection of <i>myself</i>, ever-evolving, and not simply a means to air my grievances. It's purpose and perspiration. I hope to integrate myself into a whole and represent myself without splitting into so many different pieces, as I'd always done</li>
      <li>moving from "resultism" to outcome-independence, focusing on the quality of my life decisions</li>
      <li>to embrace the importance of emotion, ritual, and acting "as-if," counterbalanced by a healthy sense of reality, e.g. </li>

      <li>developing and tracking habits that are in accordance to my values</li>
      <li>to provide real hope, by proving we can shape our lives. that it isn't too late.</li>
     </ul>
     */}
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
     }
    }
  }
`
