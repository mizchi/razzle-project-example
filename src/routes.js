/* @flow */
import React from 'react'
import Layout from './components/Layout'
import { asyncComponent } from '@jaredpalmer/after'

const loadingPlaceholderWithLayout = <Layout>Loading...</Layout>

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Home'), // required
      Placeholder: () => loadingPlaceholderWithLayout
    })
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/About'), // required
      Placeholder: () => loadingPlaceholderWithLayout
    })
  },
  {
    path: '/detail/:id',
    exact: false,
    component: asyncComponent({
      loader: () => import('./pages/Detail'), // required
      Placeholder: () => loadingPlaceholderWithLayout
    })
  }
]
