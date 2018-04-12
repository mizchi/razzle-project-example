/* @flow */
import React, { Fragment, type Node } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  children?: Node
}

export default (props: Props) => {
  return (
    <Fragment>
      <header>
        <NavLink to="/">Home</NavLink>
        |
        <NavLink to="/about">About</NavLink>
        |
        <NavLink to="/detail/a">Detail_A</NavLink>
        |
        <NavLink to="/detail/a/more">Detail_A_more</NavLink>
      </header>
      <content>{props.children}</content>
    </Fragment>
  )
}
