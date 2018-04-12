import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
export default props => {
  return (
    <Fragment>
      <header>
        <NavLink to="/">Home</NavLink>
        |
        <NavLink to="/about">About</NavLink>
        |
        <NavLink to="/detail/a">Detail_A</NavLink>
      </header>
      <content>{props.children}</content>
    </Fragment>
  )
}
