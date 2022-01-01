import React from "react"
import { Link } from "graphql"
import Layout from "../components/layout.js"

export default () => {
  return (
    <Layout>
      <h1>The Bayesian Bard</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, paddingRight: '2em' }}>

          the space where, when people meet, they are understood (sigils and AR)  ; A collaborative innovating world
          <hr />
          Cogni-sci and imagination+resilience algorithms/agility
          <hr />
          Web data science companies that uses data to create markets that empower people, with an emphasis on security. Prerequisite killer; Job markets w/ insurance schemes?
          <hr />
          Help poor nations traverse instutional voids by creating markets that empower people and multiply innovation.
          <br />
          Towards climate change, I'll model energy systems to reduce waste.
          <br />
          Online, I'll be the bard around the campfire, sharing cultural tales through data viz and words.
          <br />
          Music & mathematics<br /><br />
          <h2>Goals:</h2>
          <ul>
            <li>
              Pass all Micromasters in-person exams for Data Economic and Development Policy
              <ul>
                <li>Microeconomics (passed online)</li>
                <li>Data Analysis for Social Scientists</li>
                <li>Designing and Running Randomized Control Trials (passed online)</li>
                <li>Foundations of Economic Development Policy</li>
                <li>Challenges of Global Poverty (passed online)</li>
              </ul>
            </li>

          </ul>
        </div>

        <div style={{
          maxWidth: 310,
          overflow: 'auto'
        }}>
          <div>
            ✔ How to Code: Simple data <hr />
            ✘ How to Code: Complex data (9/13)<hr />
            ✘ Sedgewick Algorithms (2/6) - on 3, mergesort lecture, have to finish w2 sorts<hr />
            ✘ PAPL (8/??) <hr />
            ✘ nand2tetris MOOC <hr />
            ✘ MBML<hr />
            ✘ C++ book <hr />
            ✘ Stat 110 <hr />
            ✔ Introduction C++ NYU (finished; proctored TBD)<hr />
            ✘ Advanced C++ NYU (finished; proctored TBD)<hr /> (only do questions/exam. use C++ book instead -- videos not worth the time)
            ✘ Dataquest.io - (1/?)<hr />
            ✘ ui.dev React(41%)<hr />
            ✘ Wes Bos Fullstack Advanced React<hr />
            ✘ IDF
            ✘ MIT calc psets+exams (pset 1 75%)<hr />
            ✘ Math for CS (finished Strong Induction (Lecture 3), todo: reading; on pset 1) <hr />
            ✘ three.js journey (4/35?)<hr />
            ✘ The Analytics Edge () <hr />
            ✘ Bayesian for Hackers <hr />
            ✘ Probmods <hr />
            ✘ Twenty/Algorithmic Game Theory <hr />
            ✘ Linear Algebra (good for graphics and ML modeling, but NOT NECESSARY for AGT) <hr />
            ✘ Concepts, Techniques, Models of Computer Programming  <hr />
            ✘ {<a href="http://www.cs.cornell.edu/home/kleinber/networks-book">Networks, Crowds, & Markets</a>} <hr />
            ✘ {<a href="https://www2.cs.duke.edu/courses/fall18/compsci590.2/">Computational Microeconomics</a>} <hr />
          </div>
        </div>
      </div>
    </Layout>
  )
}
