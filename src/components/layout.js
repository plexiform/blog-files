import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { motion } from 'framer-motion/dist/framer-motion'

import { rhythm } from "../utils/typography"
import Container from "../components/container"
import styles from "./container.module.css"

// import "@fontsource/literata/300.css"
import "@fontsource/literata/variable.css"
import "@fontsource/literata/variable-italic.css"


export default ({ children }) => (

  <div style={{ backgroundColor: 'rgb(29,29,26)', color: 'white', minHeight: '100vh' }}>

    <div
      css={css`
          padding-top:20px;
        `}>
      <Link to={`/`}>
        <p
          css={css`
          display: inline-block;
          font-style: normal;
          margin-left: 23%;
          font-size:3em;
        `}>
          🍃
        </p>
      </Link>
      <div css={css`
          display: inline-block;
          float:right;
          margin-right:25%;
          `}>
        <div>
          <Link className={styles.link} to={`/about/`}>about</Link>
          <Link className={styles.link} to={`/blog/`}>blog</Link>
          <Link className={styles.link} to={`/projects/`}>projects</Link>
        </div>

      </div>
    </div>
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ bounce: 0 }}
        exit={{ opacity: 0 }}
      >
        <div
          className={styles.body}
        >
          <br /><br />

          {children}

        </div>
      </motion.div>
    </div>
  </div>
)
