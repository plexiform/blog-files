import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <p
          css={css`
            font-family:"LiterataVariable";
            font-style:italic;
            font-size:2em;
            display: inline-block;

          `}
        >
          Motley Meanderings
        </p>
        <p>{data.allMdx.totalCount} Posts</p>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <p
                css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
              >
                <span
                  css={css`
                font-family:"LiterataVariable";
                font-variation-settings:"wght" 400;
                font-style:italic;
                font-size:1.15em;
                color:rgb(59, 169, 22)
              `}
                >
                  {node.frontmatter.title}{" "}
                </span>
                <span
                  css={css`
                  color: thistle;
                `}
                >
                  — {node.frontmatter.date}
                </span>
              </p>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}


export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title

          }
          id
        }
      }
      totalCount
    }
  }
`
// (formatString: "DD MMMM, YYYY")
// date
