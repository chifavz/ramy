import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/Seo'



const BlogPage = ({data}) => {
  
  return (
    <Layout pageTitle="Blog">
      <ul>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.name}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query  {
  allMdx {
    nodes {
      frontmatter {
        date(formatString: "dddd, mmmm Do yyyy")
        title
      }
      id
      excerpt
    }
  }
}
`
export const Head = () => <Seo title="my post" />

export default BlogPage