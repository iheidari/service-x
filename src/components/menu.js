import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.ul`
  list-style-type: none;
  line-height: 40px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

const MenuItem = styled.li`
  float: ${props => (props.right ? "right" : "left")};
`

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 15px 16px 15px 16px;
  text-decoration: none;

  background-color: ${({ active }) => (active ? "#111" : null)};
  box-shadow: ${({ active }) =>
    active ? "inset 0px -7px 0px 0px #ff0000" : null};

  &:hover {
    background-color: #111;
    box-shadow: inset 0px -7px 0px 0px #ff0000;
  }
`
const isCurrentPath = (currentPath, nodePath) =>
  currentPath === nodePath || currentPath === nodePath + "/" ? "true" : null

const Menu = ({ items }) => {
  const [currentPath, setCurrentPath] = useState("/")

  useEffect(() => {
    if (typeof document !== "undefined") {
      setCurrentPath(document.location.pathname)
    }
  }, [])

  const menuItems = items.map(({ node }) => {
    if (node.menuOrder) {
      return (
        <MenuItem key={node.path}>
          <StyledLink
            to={node.path}
            active={isCurrentPath(currentPath, node.path)}
          >
            {node.title}
          </StyledLink>
        </MenuItem>
      )
    }
    return null
  })

  return <Container>{menuItems}</Container>
}

export default Menu
