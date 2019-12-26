import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Menu = styled.li`
  list-style-type: none;
  height: 76px;
  text-align: center;
  display: inline-block;
  padding: 0 10px;
  background-color: ${({ active }) => (active ? " #ae5cff" : null)};
  :hover {
    background-color: #ae5cff;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 76px;
  vertical-align: middle;
`

const Navbar = ({ items }) => {
  const menuItems = items.map(({ node }) => {
    if (node.showInMenu) {
      return (
        <Menu
          key={node.path}
          active={document.location.pathname === node.path ? "true" : null}
        >
          <StyledLink to={node.path}>{node.title}</StyledLink>
        </Menu>
      )
    }
    return null
  })
  return (
    <nav>
      <ul> {menuItems}</ul>
    </nav>
  )
}

export default Navbar
