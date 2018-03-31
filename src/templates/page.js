import React, { Component } from "react"
import PropTypes from "prop-types"


import Helmet from "react-helmet"

class PageTpl extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </div>
    )
  }
}

PageTpl.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

//set the transition wrapper
const PageTemplate = ({ transition, data }) => (
  <div style={transition && transition.style}>
    <PageTpl data={data}/>
  </div>
)

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
