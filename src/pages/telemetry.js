import React from 'react'
import Layout from '../components/layout'
import heatclock from '../../storage/heat_clock.png'

export default () => {
  return (
    <Layout>
      <img src={heatclock}></img>
      <iframe src="https://www.beeminder.com/widget?slug=punctual_ritual&username=excursos" height="185px" width="230px" frameborder="0px" ></iframe>
      <iframe src="https://www.beeminder.com/widget?slug=weightloss&username=excursos" height="185px" width="230px" frameborder="0px" ></iframe>
      <iframe src="https://www.beeminder.com/widget?slug=calories&username=excursos" height="185px" width="230px" frameborder="0px" ></iframe>
    </Layout>
  )
}