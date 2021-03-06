import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
