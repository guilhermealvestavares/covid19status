import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import InfosWorld from "../components/InfosWorld/InfosWorld.js"



const IndexPage = () => (
  <Layout>
    <InfosWorld/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
