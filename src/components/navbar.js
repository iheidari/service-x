import React from "react"
import Menu from "./menu"

const Navbar = ({ items }) => {
  const sortedItems = items
    .filter(({ node }) => node.menuOrder > 0)
    .sort((node1, node2) => (node1.menuOrder > node2.menuOrder ? 1 : -1))

  return (
    <nav>
      <Menu items={sortedItems} />
    </nav>
  )
}

export default Navbar
