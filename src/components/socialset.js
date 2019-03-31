import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import facebookIcn from "../images/social/fb.png"
import twitterIcn from "../images/social/twitter.png"
import linkedinIcn from "../images/social/linkedin.png"
import youtubeIcn from '../images/social/youtube.png'
import instaIcn from '../images/social/insta.png'
import rectange from '../images/social/rect.svg'
const SocialSet = ({ siteTitle }) => (
  <div style={{display:'flex',}} className="socialSet">
    <p>Find Us Here</p>
    <img src= {rectange}></img>
    <img src= {facebookIcn}></img>
    <img src= {twitterIcn}></img>
    <img src= {instaIcn}></img>
    <img src= {linkedinIcn}></img>
    <img src= {youtubeIcn}></img>

  </div>
  
)


export default SocialSet
