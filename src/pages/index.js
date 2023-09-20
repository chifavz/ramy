import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford,a brown pitbull"
        src="../images/download.jpg"
      />
 
         </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
