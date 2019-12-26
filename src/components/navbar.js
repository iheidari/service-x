import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Menu = styled.li`
  list-style-type: none;
  height: 76px;
  text-align: center;
  display: inline-block;
  padding: 0 10px;
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

// TODO: Active menu item
// active={document.location.pathname === node.path ? "true" : null}
// background-color: ${({ active }) => (active ? " #ae5cff" : null)};

const Navbar = ({ items }) => {
  const sortedItems = items.filter(({ node }) => node.menuOrder > 0)
  sortedItems.sort(({ node }) => node.menuOrder)
  const menuItems = sortedItems.map(({ node }) => {
    if (node.menuOrder) {
      return (
        <Menu key={node.path}>
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
