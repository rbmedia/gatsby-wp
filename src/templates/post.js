import React, { Component } from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"



class PostTpl extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />


      </div>
    )
  }
}
//<img src={post.image.sizes.thumbnail} />

PostTpl.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

//set the transition wrapper
const PostPage = ({ transition, data }) => (
  <div style={transition && transition.style}>
    <PostTpl data={data}/>
  </div>
)

export default PostPage



export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
