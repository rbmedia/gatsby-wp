import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import MainMenu from '../components/Menu'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
      <MainMenu menu={data} />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const LayoutQuery = graphql`
query menuQuery{
allWordpressWpApiMenusMenusItems {
edges {
  node {
    id
   name
    items{
      title
      object_slug
      url
    }
  }
}
}
}
`
