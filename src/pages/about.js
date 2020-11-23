import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>About M̶e̶ Us</h1>
    <h2>For years I ran. Now I chase resistance, embrace failure.</h2>
    <h3>You can attain greatness</h3>
    <p>
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
    </p>
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
