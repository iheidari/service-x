import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from "./navbar"
import styled from "@emotion/styled"

const StyledHeader = styled.header`
  height: 70px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`

const Header = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage {
        edges {
          node {
            name
            title
            menuOrder
            path
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Navbar items={allContentfulPage.edges} />
    </StyledHeader>
  )
}

export default Header
