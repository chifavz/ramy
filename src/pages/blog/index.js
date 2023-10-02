import * as React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'



const BlogPage = ({data}) => {
  
  return (
    <Layout pageTitle="Blog">
      <ul>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.name}>
            
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
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
        slug
      }
      id
      excerpt
    }
  }
}
`
export const Head = () => <Seo title="my post" />

export default BlogPage