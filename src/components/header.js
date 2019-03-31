import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import logo from '../images/Logo.png'
const Header = ({ siteTitle }) => (
  <nav
    style={{
      marginBottom: `1.45rem`,
      display:`flex`,
      margin:'1.45rem 2rem',
    }}
  >
  <img 
  src={logo}
  style={{
   maxWidth:`120px`,
   height:`auto`,
   objectFit:`contain`,
  }}/>
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem`,
        flex: `1`,
      }}
    >

    
    </div>
    <div style={{
        margin: `0 auto`,
        float: `right`,
        display:`flex`,
        justifyContent:`space-between`,
        maxWidth: `50%`,
        padding: `1.45rem`,
      }}>
        <a style={{
        padding: `0 1.45rem 0 0`,
      }}><div>About Us</div></a>
        <a style={{
        padding: `0 1.45rem 0 0`,
      }}><div>About Us</div></a>
        <a><div style={{
        backgroundColor: `rgba(255,255,255,0.5)`,
        borderRadius: `25px`,
        padding: `3px 18px`,
        boxShadow: `0px 10px 30px 0px rgba(64, 21,89, 20%)`,
      }}>Login</div></a>
    </div>


    
  </nav>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export const query = graphql`
  query {
    file(relativePath: { eq: "../images/Logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Header
