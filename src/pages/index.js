import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import design from "../images/Design.png"
import SocialSet from "../components/socialset"

const IndexPage = () => (
  <Layout ><div>
    <div>
    <img 
    style={{position:`absolute`, zIndex:`-1`,bottom:`-20px`, left:`0`,right:`0`}}
    src={design}></img>
    </div>
    <div style={{zIndex:`100`, padding:`20px`}}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The Best Way To Test<br/>
      Your Landing Page</h1>
    
    <p>Are you going to make your website? Share your idea with us<br/> or make it by yourself with our project maker software. Make<br/> it happens today!</p>
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
    <Link to="/page-2/"><button 
        className="GetStartedBtn btn"
        style={{
        
      }}>Get Started</button></Link>
    </div>
    <SocialSet></SocialSet>
    </div>
    </div>
  </Layout>
)

export default IndexPage
