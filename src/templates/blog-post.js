import React from "react"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"
import Popover from "@material-ui/core/Popover"
import MyPop from '../components/popover.js'

export default ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <div>
      <p
        css={css`
          font-family:"LiterataVariable";
          font-variation-settings:"wght" 400;
          font-size:1.5em;
          font-style:italic;
        `}
      >
        { post.frontmatter.title }
    </p>

      <p style={{direction:`rtl`}}>{<i>{ post.frontmatter.date }</i>}</p>

      <MDXRenderer>{post.body}</MDXRenderer>

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
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        tags
        date
        published
      }
    }
  }
`
// (formatString: "YYYY, MMMM DD")
