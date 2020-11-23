import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import Container from "../components/container"
import styles from "./container.module.css"

export default ({ children }) => (

    <div>

    <div
        css={css`
          padding-top:20px;
          background-color: darkslateblue;
        `}>
    <Link to={`/`}>
      <h3
        css={css`
          color:mintcream;
          display: inline-block;
          font-style: normal;
          margin-left: 23%;
        `}>
    aSingleDataPoint  &nbsp; <b className={styles.thistle}>●</b>
      </h3>
    </Link>
     <div css={css`
          display: inline-block;
          float:right;
          margin-right:25%;
          `}>
    <div>
       <Link className={styles.link} to={`/about/`}>About</Link>
       <Link className={styles.link} to={`/blog/`}>Blog</Link>
       <Link className={styles.link} to={`/bio/`}>Bio</Link>
       <Link className={styles.link} to={`/goals`}>Goals</Link>
       <Link className={styles.link} to={`/principles`}>Principles</Link>
    </div>

    </div>
  </div>

  <div
      className={styles.body}
  >
<br/><br/>
    {children}
  </div>

</div>
)
