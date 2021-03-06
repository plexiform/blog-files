import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
      <h1>{ post.frontmatter.title }</h1>
 
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>

      <hr/>

      {/* ternary operator to show tags if they exist, not otherwise */}
      <p><b>tags</b>:&nbsp;&nbsp;&nbsp;
      { post.frontmatter.tags !== null ?

          post.frontmatter.tags.map((tag => (
            <Link to={`/tags/${tag}`}>●{tag} </Link>
          )))

        :
        <i>guten tag!</i>
      }


       </p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
