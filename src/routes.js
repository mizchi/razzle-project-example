/* @flow */
import React from 'react'
import Layout from './components/Layout'
import { asyncComponent } from '@jaredpalmer/after'

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Home'), // required
      Placeholder: () => <Layout /> // this is optional, just returns null by default
    })
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/About'), // required
      Placeholder: () => <Layout /> // this is optional, just returns null by default
    })
  },
  {
    path: '/detail/:id',
    exact: false,
    component: asyncComponent({
      loader: () => import('./pages/Detail'), // required
      Placeholder: () => <Layout /> // this is optional, just returns null by default
    })
  }
]
