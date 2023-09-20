import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/Seo'


const BlogPage = ({data}) => {
  console.log(data)
  return (
    <Layout pageTitle="Blog">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}
export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}`



export const Head = () => <Seo title="my post" />

export default BlogPage