import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>myphoto</p>
      <StaticImage
        alt="High builden view"
        src="../images/dmain.jpg"
      />
 
         </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
