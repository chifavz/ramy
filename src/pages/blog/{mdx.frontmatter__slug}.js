import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/Seo'



const BlogPost = ({ data, children }) => {
  const Image = getImage(data.mdx.frontmatter.hero_image)
  console.log('blogpost data ===', data)
  console.log('blogpost Image ===', Image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>

      <GatsbyImage
      image={Image}
      alt={data.mdx.frontmatter.hero_image_alt}
         />

      {children}

    <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
</p>

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "dddd,MMMM Do YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  
}

`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
