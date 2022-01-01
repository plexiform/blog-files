import React from "react"
import Layout from "../components/layout.js"
import { graphql, Link } from "gatsby"
import { motion } from 'framer-motion/dist/framer-motion'
import { Hidden } from "@material-ui/core"

export default ({ data }) =>
  <Layout>
    <div style={{ maxHeight: '10em', overflow: 'hidden', textOverflow: "ellipsis" }}>
      <motion.p
        style={{ fontSize: '3em' }}
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          type: "tween",

        }}
      >
        How does culture travel?
      </motion.p>
    </div>

    <p>& can we do better?</p>
    <hr />
    <div style={{ marginTop: 48 }}>

      <div style={{
        display: 'inline-block',
        float: 'right',
        fontSize: 14
      }}>
        <p>
          <a href="https://github.com/plexiform">github </a>
          – HackerRank –
          Kaggle
        </p>
      </div>


    </div>
  </Layout >

export const query = graphql`
  {
    allFile {
      edges {
        node {
          base
        }
      }
    }
  }
`
