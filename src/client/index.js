/* @flow */
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ensureReady, After } from '@jaredpalmer/after'
import routes from '../routes'

ensureReady(routes).then(data => {
  const root = document.getElementById('root')
  if (root) {
    hydrate(
      <BrowserRouter>
        <After data={data} routes={routes} />
      </BrowserRouter>,
      root
    )
  }
})

if ((module: any).hot) {
  ;(module: any).hot.accept()
}
